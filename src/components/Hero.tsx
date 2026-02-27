export default function Hero() {
  return (
    <section className="hero" id="haqinda">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">Ochiq ish bozorida</div>
            <h1 className="hero-name">
              Salom, men<br />
              <span>Xalilov Ibrohim</span>
            </h1>
            <p className="hero-role">
              Android Developer · Backend Engineer · O'qituvchi
            </p>
            <blockquote className="hero-quote">
              "Natija qilmaganingiz uchun emas, sababini qilmaganingiz uchun tergalasiz"
            </blockquote>
            <div className="hero-btns">
              <a
                href="https://t.me/ibrohim_xalilov"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                ✉️ Bog'lanish
              </a>
              <a href="#konikma" className="btn btn-outline">
                📋 Ko'nikmalar
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">16</div>
                <div className="stat-label">Darsliklar</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">O'yinlar</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Loyihalar</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Yillik tajriba</div>
              </div>
            </div>
          </div>
          <div className="hero-avatar-wrap">
            <div className="hero-avatar">👨‍💻</div>
          </div>
        </div>
      </div>
    </section>
  );
}
