export default function AndroidProject() {
  const screenshots = [
    { label: "Bosh sahifa", emoji: "🏠" },
    { label: "So'z o'rganish", emoji: "📚" },
    { label: "Mashqlar", emoji: "✍️" },
  ];

  return (
    <section className="section" id="loyihalar">
      <div className="container">
        <h2 className="section-title">Android Loyiha</h2>
        <p className="section-sub">Play Store'dagi asosiy ilovam</p>

        <div className="android-grid">
          <div className="android-info">
            <h3>DictUp 📱</h3>
            <p>
              Ingliz tilini o'rganish uchun yaratilgan zamonaviy Android ilova.
              Kunlik mashqlar, lug'at, grammatika testlari va so'z kartalari
              bilan til o'rganish jarayonini qiziqarli va samarali qiladi.
            </p>
            <p>
              <strong style={{ color: 'var(--text)' }}>Texnologiyalar:</strong>{' '}
              <span style={{ color: 'var(--text-muted)' }}>
                Kotlin · Jetpack Compose · Room DB · MVVM · Coroutines
              </span>
            </p>
            <div className="android-links" style={{ marginTop: '1rem' }}>
              <a
                href="https://play.google.com/store/apps/details?id=uz.alien.dictup"
                className="btn-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>▶</span> Google Play
              </a>
              <a
                href="https://4000.uz/"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 4000.uz
              </a>
            </div>
          </div>

          <div className="screenshots">
            {screenshots.map(s => (
              <div key={s.label} className="screenshot-placeholder">
                <span>{s.emoji}</span>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
