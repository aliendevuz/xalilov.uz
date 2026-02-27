const skills = [
  { name: 'Kotlin', icon: '💜', level: 4, note: 'Android primary language' },
  { name: 'Python', icon: '🐍', level: 4, note: 'Scripting, bots, data' },
  { name: 'DevOps', icon: '⚙️', level: 4, note: 'Docker, CI/CD, Linux' },
  { name: 'Android', icon: '📱', level: 3, note: 'Jetpack Compose, MVVM' },
  { name: 'Game Dev', icon: '🎮', level: 3, note: 'Godot, GDScript' },
  { name: 'Backend', icon: '🖥️', level: 2, note: 'Node.js, REST API' },
  { name: 'Frontend', icon: '🎨', level: 1, note: 'React, HTML/CSS basics' },
];

export default function Skills() {
  return (
    <section className="section" id="konikma">
      <div className="container">
        <h2 className="section-title">Ko'nikmalar</h2>
        <p className="section-sub">O'rganish jarayonidagi xolisona baholash (5 dan)</p>

        <div className="skills-grid">
          {skills.map(s => (
            <div key={s.name} className="skill-item">
              <div className="skill-header">
                <div className="skill-name">
                  <span className="skill-icon">{s.icon}</span>
                  {s.name}
                </div>
                <span className="skill-score">{s.level}/5</span>
              </div>
              <div className="skill-bar-wrap">
                <div
                  className="skill-bar"
                  style={{ width: `${(s.level / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="skills-note">
          * Hali o'rganish jarayonidaman — bu baholash hozirgi real darajamni ko'rsatadi.
        </p>

        <div className="cv-card">
          <div>
            <h3>CV & Resume</h3>
            <p>To'liq ish tajribasi va ko'nikmalari bilan</p>
          </div>
          <div className="cv-btns">
            <a
              href="https://www.linkedin.com/in/ibrohim-xalilov"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:aliendevuz@gmail.com"
              className="btn btn-outline"
            >
              Email orqali
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
