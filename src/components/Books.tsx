import { useState } from 'react';

const books = [
  { title: 'Ingliz tili', icon: '🇬🇧', url: 'https://english.xalilov.uz', tag: 'Til' },
  { title: 'Cyber Security', icon: '🔐', url: 'https://cyber.xalilov.uz', tag: 'Universitet' },
  { title: 'Cloud Fundamentals', icon: '☁️', url: 'https://cloud.xalilov.uz', tag: 'Universitet' },
  { title: 'SDLC', icon: '🔄', url: 'https://sdlc.xalilov.uz', tag: 'Universitet' },
  { title: 'Digital Innovations', icon: '💡', url: 'https://digital.xalilov.uz', tag: 'Universitet' },
  { title: "Sun'iy Intellekt", icon: '🤖', url: 'https://ai.xalilov.uz', tag: 'Universitet' },
  { title: 'Dinshunoslik', icon: '📖', url: 'https://religious.xalilov.uz', tag: 'Universitet' },
  { title: 'Bot Development', icon: '🤖', url: 'https://bot.xalilov.uz', tag: 'Dasturlash' },
  { title: 'Backend Development', icon: '🖥️', url: 'https://backend.xalilov.uz', tag: 'Dasturlash' },
  { title: 'Telegram Mini App', icon: '💬', url: 'https://app.xalilov.uz', tag: 'Dasturlash' },
  { title: 'DSA', icon: '🗂️', url: 'https://dsa.xalilov.uz', tag: "Qo'shimcha" },
  { title: 'Matematika', icon: '📐', url: 'https://math.xalilov.uz', tag: "Qo'shimcha" },
  { title: 'Android', icon: '📱', url: 'https://android.xalilov.uz', tag: "Qo'shimcha" },
  { title: 'Kotlin', icon: '💜', url: 'https://kotlin.xalilov.uz', tag: "Qo'shimcha" },
  { title: 'Python', icon: '🐍', url: 'https://python.xalilov.uz', tag: "Qo'shimcha" },
  { title: 'Game Development', icon: '🎮', url: 'https://game.xalilov.uz', tag: "Qo'shimcha" },
];

const ALL = 'Hammasi';
const tags = [ALL, 'Til', 'Universitet', 'Dasturlash', "Qo'shimcha"];

export default function Books() {
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? books : books.filter(b => b.tag === active);

  return (
    <section className="section" id="darsliklar">
      <div className="container">
        <h2 className="section-title">Darsliklar</h2>
        <p className="section-sub">O'rganayotgan bilimlarimni mustahkamlash uchun yozilgan 16 ta darslik</p>

        <div className="books-filters">
          {tags.map(t => (
            <button
              key={t}
              className={`filter-btn${active === t ? ' active' : ''}`}
              onClick={() => setActive(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="books-grid">
          {filtered.map(b => (
            <a
              key={b.url}
              href={b.url}
              className="book-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="book-card-icon">{b.icon}</div>
              <div className="book-card-tag">{b.tag}</div>
              <div className="book-card-title">{b.title}</div>
              <div className="book-card-link">
                🔗 {b.url.replace('https://', '')}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
