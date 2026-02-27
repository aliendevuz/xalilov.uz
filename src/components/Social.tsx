const socials = [
  {
    icon: '✈️',
    bg: '#229ED9',
    label: 'Telegram kanal',
    handle: '@tech_bro_uz',
    url: 'https://t.me/tech_bro_uz',
  },
  {
    icon: '▶️',
    bg: '#FF0000',
    label: 'YouTube',
    handle: '@techbrouz',
    url: 'https://www.youtube.com/@techbrouz',
  },
  {
    icon: '📝',
    bg: '#F97316',
    label: 'Blog',
    handle: 'blog.xalilov.uz',
    url: 'https://blog.xalilov.uz/',
  },
  {
    icon: '🐙',
    bg: '#24292e',
    label: 'GitHub',
    handle: 'aliendevuz',
    url: 'https://github.com/aliendevuz/',
  },
];

export default function Social() {
  return (
    <section className="section" id="ijtimoiy">
      <div className="container">
        <h2 className="section-title">Ijtimoiy tarmoqlar</h2>
        <p className="section-sub">Meni kuzatib boring va yangiliklar haqida bilib turing</p>

        <div className="social-grid">
          {socials.map(s => (
            <a
              key={s.url}
              href={s.url}
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="social-icon-wrap"
                style={{ background: s.bg + '22', border: `1px solid ${s.bg}44` }}
              >
                {s.icon}
              </div>
              <div className="social-info">
                <strong>{s.label}</strong>
                <span>{s.handle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
