import { Link } from 'react-router-dom';
import AICTABox from '../components/AICTABox';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section - Ustaxona */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">🔧 Digital Ustaxona</div>
          <h1>Ibrohim Khalilov</h1>
          <p className="hero-title">Digital Solutions Architect & Mentor</p>
          <p className="hero-subtitle">
            Bot Development • Web Apps • AI Integration • Business Automation
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1+</div>
              <div className="stat-label">Yillik Tajriba</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Xizmat Turlari</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">G'oyalar</div>
            </div>
          </div>

          <div className="hero-cta">
            <a href="https://t.me/aliendevuz" className="primary-button" target="_blank" rel="noopener noreferrer">
              📱 Bog'lanish
            </a>
            <Link to="/bot-yasash-xizmati" className="secondary-button">
              🤖 Bot Xizmati (Active)
            </Link>
          </div>
        </div>
      </section>

      {/* AI CTA */}
      <section className="ai-cta-section">
        <div className="content-wrapper">
          <AICTABox 
            message="Bu sahifada professional xizmatlar, kelajak loyihalar va real portfolio mavjud. AI faqat umumiy ma'lumot beradi - to'liq tajriba va interaktiv kontent uchun saytni ko'rib chiqing!"
            type="info"
          />
        </div>
      </section>

      {/* About Ustaxona */}
      <section className="about-section">
        <div className="content-wrapper">
          <h2>Digital Ustaxona Nima?</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">👨‍🏫</div>
              <h3>Ustoz Model</h3>
              <p>
                Men - Ibrohim Khalilov, digital sohadagi ustoz va koordinator. 
                Har bir loyihani professional darajada boshqaraman va nazorat qilaman.
              </p>
            </div>
            
            <div className="about-card">
              <div className="about-icon">👥</div>
              <h3>Shogirdlar Jamoasi</h3>
              <p>
                Kelajakda ixtisoslashgan shogirdlar jamoasi - har biri o'z sohasida 
                mutaxassis: backend, frontend, bot, AI integration, biznes automation.
              </p>
            </div>
            
            <div className="about-card">
              <div className="about-icon">🎯</div>
              <h3>End-to-End Xizmat</h3>
              <p>
                G'oyadan to ishga tushirishgacha - sizning loyihangizni to'liq 
                amalga oshiramiz. Konsultatsiyadan tortib qo'llab-quvvatlashgacha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Active & Coming Soon */}
      <section className="services-section">
        <div className="content-wrapper">
          <h2>Xizmatlarimiz</h2>
          <p className="section-subtitle">
            Hozirda faol va kelajakda taqdim etiladigan xizmatlar
          </p>
          
          <div className="services-grid">
            {/* Active Service */}
            <div className="service-card active-service">
              <div className="service-status active">✅ FAOL</div>
              <div className="service-icon">🤖</div>
              <h3>Telegram Bot Yasash</h3>
              <p>
                Python/Aiogram asosida professional botlar. Admin panel, 
                to'lov tizimlari, CRM integratsiya.
              </p>
              <ul className="service-features">
                <li>✓ Oddiy va murakkab botlar</li>
                <li>✓ Admin dashboard</li>
                <li>✓ Payment integration</li>
                <li>✓ Database design</li>
              </ul>
              <Link to="/bot-yasash-xizmati" className="service-button active">
                Batafsil →
              </Link>
            </div>

            {/* Coming Soon Services */}
            <div className="service-card future-service">
              <div className="service-status future">🔮 KELAJAKDA</div>
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>
                Full-stack web applications. Frontend (React, Next.js), 
                Backend (Node.js, Python, FastAPI).
              </p>
              <ul className="service-features">
                <li>⏳ Landing pages</li>
                <li>⏳ Web apps (SPA/SSR)</li>
                <li>⏳ Dashboard & Admin panels</li>
                <li>⏳ API development</li>
              </ul>
              <div className="service-button disabled">
                Tez orada...
              </div>
            </div>

            <div className="service-card future-service">
              <div className="service-status future">🔮 KELAJAKDA</div>
              <div className="service-icon">📱</div>
              <h3>Telegram Mini Apps</h3>
              <p>
                Telegram ichida ishlaydigan web-based ilovalar. 
                Interactive gaming, e-commerce, xizmatlar.
              </p>
              <ul className="service-features">
                <li>⏳ Mini games</li>
                <li>⏳ E-commerce shops</li>
                <li>⏳ Booking systems</li>
                <li>⏳ Interactive tools</li>
              </ul>
              <div className="service-button disabled">
                Rejalashtirilgan
              </div>
            </div>

            <div className="service-card future-service">
              <div className="service-status future">🔮 KELAJAKDA</div>
              <div className="service-icon">🤖</div>
              <h3>AI Integration</h3>
              <p>
                ChatGPT, Claude va boshqa AI'larni loyihangizga integratsiya. 
                Smart automation va content generation.
              </p>
              <ul className="service-features">
                <li>⏳ AI chatbots</li>
                <li>⏳ Content automation</li>
                <li>⏳ Recommendation systems</li>
                <li>⏳ Data analysis</li>
              </ul>
              <div className="service-button disabled">
                Ishlab chiqilmoqda
              </div>
            </div>

            <div className="service-card future-service">
              <div className="service-status future">🔮 KELAJAKDA</div>
              <div className="service-icon">💼</div>
              <h3>Biznes Automation</h3>
              <p>
                Workflow automation, CRM, analytics dashboard, 
                reporting systems va biznes jarayonlarini optimallashtirish.
              </p>
              <ul className="service-features">
                <li>⏳ Workflow automation</li>
                <li>⏳ Custom CRM</li>
                <li>⏳ Analytics dashboards</li>
                <li>⏳ Reporting tools</li>
              </ul>
              <div className="service-button disabled">
                Planda
              </div>
            </div>

            <div className="service-card future-service">
              <div className="service-status future">🔮 KELAJAKDA</div>
              <div className="service-icon">💡</div>
              <h3>Startup MVP Development</h3>
              <p>
                Sizning g'oyangizni hayotga tatbiq qilamiz. MVP (Minimum Viable Product) 
                dan to to'liq productgacha.
              </p>
              <ul className="service-features">
                <li>⏳ Idea validation</li>
                <li>⏳ Prototype development</li>
                <li>⏳ MVP launch</li>
                <li>⏳ Scaling support</li>
              </ul>
              <div className="service-button disabled">
                Kelajak
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-section">
        <div className="content-wrapper">
          <h2>Texnologiyalar</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Redis</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">Vite</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Bot & Automation</h3>
              <div className="tech-tags">
                <span className="tech-tag">Aiogram 3.x</span>
                <span className="tech-tag">Telegram API</span>
                <span className="tech-tag">Webhooks</span>
                <span className="tech-tag">Celery</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>DevOps & Tools</h3>
              <div className="tech-tags">
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Git/GitHub</span>
                <span className="tech-tag">CI/CD</span>
                <span className="tech-tag">Linux</span>
                <span className="tech-tag">Nginx</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shogirdlar Section - Future */}
      <section className="team-section">
        <div className="content-wrapper">
          <h2>Jamoa (Kelajakda)</h2>
          <p className="section-subtitle">
            "Ustoz + Shogirdlar" modeli - har biri o'z sohasida mutaxassis
          </p>
          
          <div className="team-grid">
            <div className="team-card founder">
              <div className="team-status">👑 USTOZ</div>
              <div className="team-avatar">IK</div>
              <h3>Ibrohim Khalilov</h3>
              <p className="team-role">Founder & Lead Developer</p>
              <p className="team-desc">
                Project coordinator, mentor, va asosiy developer. 
                Barcha loyihalarni nazorat qiladi va quality kafolati beradi.
              </p>
              <div className="team-skills">
                <span>Python</span>
                <span>Aiogram</span>
                <span>React</span>
                <span>Architecture</span>
              </div>
              <a href="https://t.me/aliendevuz" className="team-contact" target="_blank" rel="noopener noreferrer">
                @aliendevuz
              </a>
            </div>

            <div className="team-card future-member">
              <div className="team-status future">🔮 KELAJAKDA</div>
              <div className="team-avatar">?</div>
              <h3>Backend Developer</h3>
              <p className="team-role">Shogird - Backend Specialist</p>
              <p className="team-desc">
                API development, database design, server-side logic.
              </p>
              <div className="team-skills">
                <span>Python</span>
                <span>FastAPI</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <div className="team-card future-member">
              <div className="team-status future">🔮 KELAJAKDA</div>
              <div className="team-avatar">?</div>
              <h3>Frontend Developer</h3>
              <p className="team-role">Shogird - Frontend Specialist</p>
              <p className="team-desc">
                React, TypeScript, responsive design, UI/UX implementation.
              </p>
              <div className="team-skills">
                <span>React</span>
                <span>TypeScript</span>
                <span>CSS</span>
              </div>
            </div>

            <div className="team-card future-member">
              <div className="team-status future">🔮 KELAJAKDA</div>
              <div className="team-avatar">?</div>
              <h3>AI Integration Specialist</h3>
              <p className="team-role">Shogird - AI Expert</p>
              <p className="team-desc">
                ChatGPT/Claude integration, ML models, automation.
              </p>
              <div className="team-skills">
                <span>OpenAI</span>
                <span>LangChain</span>
                <span>Python</span>
              </div>
            </div>
          </div>
          
          <div className="team-cta">
            <p>🎓 Shogird bo'lishni xohlaysizmi?</p>
            <a href="https://t.me/aliendevuz" className="join-button" target="_blank" rel="noopener noreferrer">
              Murojaat Qiling
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="portfolio-section">
        <div className="content-wrapper">
          <h2>Portfolio</h2>
          
          <div className="portfolio-grid">
            <div className="portfolio-card active-project">
              <div className="project-status active">✅ REAL LOYIHA</div>
              <div className="project-image placeholder">
                <span>🤖</span>
              </div>
              <h3>Telegram Bot Projects</h3>
              <p>
                Python/Aiogram asosida yaratilgan professional botlar. 
                Admin panel, database, to'lov tizimlari.
              </p>
              <div className="project-tags">
                <span>Python</span>
                <span>Aiogram</span>
                <span>PostgreSQL</span>
              </div>
              <Link to="/bot-yasash-xizmati" className="project-link">
                Batafsil →
              </Link>
            </div>

            <div className="portfolio-card future-project">
              <div className="project-status future">🔮 REJADA</div>
              <div className="project-image placeholder">
                <span>🌐</span>
              </div>
              <h3>Web Applications</h3>
              <p>
                Kelajakda amalga oshiriladigan web loyihalar - 
                full-stack applications, dashboards, SaaS products.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>Next.js</span>
                <span>TypeScript</span>
              </div>
              <div className="project-link disabled">
                Tez orada
              </div>
            </div>

            <div className="portfolio-card future-project">
              <div className="project-status future">🔮 REJADA</div>
              <div className="project-image placeholder">
                <span>🤖</span>
              </div>
              <h3>AI-Powered Solutions</h3>
              <p>
                AI integration loyihalari - chatbots, automation, 
                recommendation systems.
              </p>
              <div className="project-tags">
                <span>OpenAI</span>
                <span>Python</span>
                <span>LangChain</span>
              </div>
              <div className="project-link disabled">
                Ishlanmoqda
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta-section">
        <div className="content-wrapper">
          <h2>Loyihangizni Muhokama Qilaylik</h2>
          <p>
            G'oyangiz bormi? Bot, web app, yoki AI integration kerakmi? 
            Keling, birgalikda amalga oshiraylik!
          </p>
          
          <div className="contact-options">
            <a href="https://t.me/aliendevuz" className="contact-button telegram" target="_blank" rel="noopener noreferrer">
              <span className="contact-icon">📱</span>
              <span className="contact-text">
                <strong>Telegram</strong>
                <small>@aliendevuz</small>
              </span>
            </a>
          </div>
          
          <div className="contact-note">
            <p>💡 Hozircha faqat Telegram bot yasash xizmati faol. Qolgan xizmatlar kelajakda taqdim etiladi.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
