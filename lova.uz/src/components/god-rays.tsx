"use client";

import { ShaderCanvas, NOISE_GLSL, UNIFORMS_GLSL } from "@/components/shader-canvas";

/**
 * God rays: sunlight shafts descending through water, with caustics beneath.
 *
 * The shafts are a volumetric integral done the cheap way — march a handful of
 * samples along the direction from the light, accumulating how much of the
 * moving surface lets light through at each step. Because the same surface
 * function also drives the caustic net on the floor, the shafts and the
 * filaments agree with each other: a bright shaft lands where the floor is
 * bright, which is what sells it as one body of water rather than two effects.
 */
const FRAGMENT = `
${UNIFORMS_GLSL}
${NOISE_GLSL}

// Transmission through the wavy surface at a horizontal position.
float surfaceGate(float x, float t) {
  float w =
    sin(x * 3.1 + t * 1.3) * 0.5 +
    sin(x * 5.7 - t * 0.9) * 0.3 +
    fbm(vec2(x * 1.8, t * 0.5)) * 1.2;
  return smoothstep(0.15, 0.95, 0.5 + 0.5 * sin(w * 2.2));
}

float causticFloor(vec2 p, float t) {
  vec2 q = p;
  float acc = 0.0;
  float amp = 1.0;
  for (int i = 0; i < 5; i++) {
    float a = float(i) * 1.13;
    mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
    q = rot * q * 1.42 + vec2(0.7, -0.4);
    q += vec2(sin(q.y * 2.4 + t * 1.1), cos(q.x * 2.4 - t * 0.9)) * 0.42;
    acc += amp * (0.5 + 0.5 * sin(q.x * 1.7 + q.y * 1.9 + t * 0.8));
    amp *= 0.72;
  }
  return acc / 2.6;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);

  float t = uTime * 0.24;

  // Light source sits above the frame; the pointer slides it sideways.
  vec2 sun = vec2(0.5 * aspect + (uPointer.x - 0.5) * aspect * 0.7 * uPointerStrength, 1.35);
  vec2 toSun = normalize(sun - p);

  // March toward the light, sampling how much the surface lets through.
  float shaft = 0.0;
  float weight = 1.0;
  for (int i = 0; i < 14; i++) {
    float s = float(i) / 14.0;
    vec2 sample = p + toSun * s * 1.5;
    shaft += surfaceGate(sample.x * 2.6 + sample.y * 0.4, t) * weight;
    weight *= 0.90;
  }
  shaft /= 9.0;

  // Shafts are strongest near the surface and dissolve with depth.
  shaft *= smoothstep(-0.15, 0.95, p.y);
  shaft = pow(clamp(shaft, 0.0, 1.0), 2.2);

  // Caustic net on the floor, strongest at the bottom of the frame.
  float floorMask = smoothstep(0.55, 0.0, p.y);
  vec2 fp = vec2(p.x, p.y * 0.6) * 2.8;
  float cr = causticFloor(fp + vec2(0.014, 0.0), t);
  float cg = causticFloor(fp, t);
  float cb = causticFloor(fp - vec2(0.014, 0.0), t);
  vec3 net = pow(vec3(cr, cg, cb), vec3(7.0)) * 2.2 * floorMask;

  // Suspended particles drifting in the shafts.
  float motes = step(0.9975, hash(floor(gl_FragCoord.xy * 0.55 + vec2(0.0, uTime * 6.0))));
  motes *= shaft * 1.4;

  vec3 darkWater = vec3(0.014, 0.042, 0.068);
  vec3 darkTint = vec3(0.48, 0.90, 0.98);
  vec3 lightWater = vec3(0.90, 0.94, 0.955);
  vec3 lightTint = vec3(0.16, 0.50, 0.64);

  vec3 water = mix(lightWater, darkWater, uDark);
  vec3 tint = mix(lightTint, darkTint, uDark);

  // Water gets darker with depth in both themes.
  float depth = mix(0.75, 1.15, smoothstep(0.0, 1.0, p.y));

  vec3 color;
  if (uDark > 0.5) {
    color = water * depth;
    color += shaft * tint * 0.30;
    color += net * tint * 0.45;
    color += motes * vec3(0.9, 0.98, 1.0) * 0.5;
  } else {
    color = water * depth;
    float bright = clamp(shaft * 0.7 + (net.r + net.g + net.b) / 3.0, 0.0, 1.0);
    color = mix(color, tint, bright * 0.55);
  }

  vec2 c = uv - 0.5;
  c.x *= aspect;
  float centre = smoothstep(0.04, 0.5, length(c));
  color = mix(mix(water, color, 0.6), color, centre);

  float edge = 1.0 - smoothstep(0.75, 1.45, length(c));
  color = mix(water, color, 0.65 + 0.35 * edge);

  gl_FragColor = vec4(color, 1.0);
}
`;

export function GodRays() {
  return <ShaderCanvas fragment={FRAGMENT} />;
}
