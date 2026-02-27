const contacts = [
  {
    icon: '✈️',
    label: 'Telegram',
    value: '@ibrohim_xalilov',
    url: 'https://t.me/ibrohim_xalilov',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'ibrohim-xalilov',
    url: 'https://www.linkedin.com/in/ibrohim-xalilov',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'aliendevuz@gmail.com',
    url: 'mailto:aliendevuz@gmail.com',
  },
];

export default function Contact() {
  return (
    <section className="section" id="aloqa">
      <div className="container">
        <h2 className="section-title">Muloqot</h2>
        <p className="section-sub">
          Hamkorlik, savol yoki shunchaki gaplashmoqchi bo'lsangiz — bog'laning!
        </p>

        <div className="contact-grid">
          {contacts.map(c => (
            <a
              key={c.url}
              href={c.url}
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">{c.icon}</div>
              <div className="contact-info">
                <strong>{c.label}</strong>
                <span>{c.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
