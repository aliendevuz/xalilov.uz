const projects = [
  {
    icon: '📝',
    title: 'Shaxsiy Blog',
    desc: 'Texnologiya, dasturlash va shaxsiy fikrlar haqidagi maqolalar. O\'zbekcha texnik kontent.',
    url: 'https://blog.xalilov.uz/',
    tags: ['Blog', 'Yozuv'],
  },
];

export default function OtherProjects() {
  return (
    <section className="section" id="boshqa">
      <div className="container">
        <h2 className="section-title">Boshqa loyihalar</h2>
        <p className="section-sub">Qo'shimcha ishlarim va davom etayotgan proyektlar</p>

        <div className="projects-grid">
          {projects.map(p => (
            <a
              key={p.url}
              href={p.url}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card-header">
                <div className="project-icon">{p.icon}</div>
                <span className="project-ext-link">↗</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="project-more">
          🚧 Ko'proq loyihalar tez orada qo'shiladi...
        </div>
      </div>
    </section>
  );
}
