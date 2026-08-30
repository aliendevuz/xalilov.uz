"use client";

import { useEffect, useRef } from "react";

const VERTEX_SRC = `
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

type Props = {
  /** Fragment shader body. Receives uResolution, uTime, uPointer, uPointerStrength, uDark. */
  fragment: string;
  /** Render scale relative to CSS pixels. Lower for expensive shaders. */
  scale?: number;
  /** Frames per second cap. */
  fps?: number;
};

/**
 * Shared full-screen shader host.
 *
 * Every variant background is a single fragment shader over one triangle. This
 * component owns the parts they all need identically — context setup, uniform
 * plumbing, a smoothed pointer, DPR and frame-rate caps, pausing when the tab
 * is hidden, and a single still frame under reduced motion — so each variant
 * file is nothing but its own shader.
 */
export function ShaderCanvas({ fragment, scale = 1, fps = 30 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    gl.getExtension("OES_standard_derivatives");

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
    const fragmentShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `#extension GL_OES_standard_derivatives : enable\n${fragment}`,
    );
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uPointer = gl.getUniformLocation(program, "uPointer");
    const uPointerStrength = gl.getUniformLocation(program, "uPointerStrength");
    const uDark = gl.getUniformLocation(program, "uDark");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const maxDpr = window.innerWidth < 768 ? 1 : 1.5;
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr) * scale;

    function resize() {
      const width = Math.max(1, Math.floor(window.innerWidth * dpr));
      const height = Math.max(1, Math.floor(window.innerHeight * dpr));
      if (canvas!.width !== width || canvas!.height !== height) {
        canvas!.width = width;
        canvas!.height = height;
        gl!.viewport(0, 0, width, height);
      }
    }
    resize();
    window.addEventListener("resize", resize);

    const target = { x: 0.5, y: 0.5, strength: 0 };
    const current = { x: 0.5, y: 0.5, strength: 0 };

    function onPointerMove(event: PointerEvent) {
      target.x = event.clientX / window.innerWidth;
      target.y = 1 - event.clientY / window.innerHeight;
      target.strength = 1;
    }

    function onPointerLeave() {
      target.strength = 0;
    }

    if (!prefersReducedMotion && !isCoarsePointer) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave);
    }

    let rafId = 0;
    let running = true;
    const frameInterval = 1000 / fps;
    let lastFrameTime = 0;
    const start = performance.now();

    function draw(elapsed: number) {
      gl!.uniform2f(uResolution, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, elapsed);
      gl!.uniform2f(uPointer, current.x, current.y);
      gl!.uniform1f(uPointerStrength, current.strength);
      gl!.uniform1f(uDark, darkQuery.matches ? 1 : 0);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
    }

    function frame(now: number) {
      if (!running) return;
      rafId = requestAnimationFrame(frame);
      if (now - lastFrameTime < frameInterval) return;
      lastFrameTime = now;

      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      current.strength += (target.strength - current.strength) * 0.05;

      draw((now - start) / 1000);
    }

    function handleVisibility() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        lastFrameTime = 0;
        rafId = requestAnimationFrame(frame);
      }
    }

    function onSchemeChange() {
      if (prefersReducedMotion) draw(0);
    }
    darkQuery.addEventListener("change", onSchemeChange);

    if (prefersReducedMotion) {
      draw(0);
    } else {
      rafId = requestAnimationFrame(frame);
      document.addEventListener("visibilitychange", handleVisibility);
    }

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      darkQuery.removeEventListener("change", onSchemeChange);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, [fragment, scale, fps]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}

/** Noise helpers shared by the variant shaders. */
export const NOISE_GLSL = `
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.02 + vec2(37.1, 17.3);
    a *= 0.5;
  }
  return v;
}
`;

export const UNIFORMS_GLSL = `
precision highp float;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uPointer;
uniform float uPointerStrength;
uniform float uDark;
`;
