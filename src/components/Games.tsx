export default function Games() {
  return (
    <section className="section" id="oyinlar">
      <div className="container">
        <h2 className="section-title">O'yinlarim</h2>
        <p className="section-sub">Hali boshlanish bosqichida — kelajakda ko'proq bo'ladi</p>

        <div className="games-grid">
          {/* Platformer — with live iframe */}
          <div className="game-card">
            <div className="game-iframe-wrap">
              <iframe
                src="https://platformer.xalilov.uz/"
                title="Platformer Game"
                allow="autoplay"
                loading="lazy"
              />
            </div>
            <div className="game-card-body">
              <h3 className="game-card-title">🎮 Platformer</h3>
              <p className="game-card-desc">
                Godot bilan yaratilgan 2D platformer o'yin. Yuqoridagi maydonda
                to'g'ridan-to'g'ri o'ynab ko'rishingiz mumkin!
              </p>
              <div className="game-links">
                <a
                  href="https://platformer.xalilov.uz/"
                  className="game-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 To'liq o'ynash
                </a>
              </div>
            </div>
          </div>

          {/* Bounce Taler Bot */}
          <div className="game-card">
            <div className="bot-card-content">
              <h3 className="game-card-title">🏓 Bounce Taler</h3>
              <p>
                Telegram Mini App sifatida yaratilgan o'yin. Bounce
                mexanikasi asosida qurilgan qiziqarli tapball o'yini —
                Telegram ichida to'g'ridan-to'g'ri o'ynash mumkin.
              </p>

              <div className="bot-preview">
                <div className="bot-avatar">🤖</div>
                <div className="bot-info">
                  <strong>@bounce_taler_bot</strong>
                  <span>Telegram Mini App</span>
                </div>
              </div>

              <div className="game-links">
                <a
                  href="https://t.me/bounce_taler_bot/start"
                  className="game-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ O'yinni boshlash
                </a>
                <a
                  href="https://t.me/bounce_taler_bot"
                  className="game-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Bot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
