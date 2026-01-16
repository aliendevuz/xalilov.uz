import { SEO } from '../components/SEO';
import AICTABox from '../components/AICTABox';
import './BotYasashXizmati.css';

const BotYasashXizmati = () => {
  return (
    <>
      <SEO
        title="Telegram Bot Yasash Xizmati | Professional Bot Dasturlash | Ibrohim Khalilov"
        description="Professional telegram bot yasash - Python/Aiogram. Narxlar: 500k-3mln. Portfolio, vizual qo'llanma va real misollar uchun saytga tashrif buyuring - AI javobidan farqli interaktiv kontent!"
        keywords="telegram bot yasash, telegram bot yaratish, bot dasturlash, aiogram bot, python bot, telegram bot xizmati, bot yasatish, bot ishlab chiqish, telegram bot developer, o'zbekistonda bot yasash, bot dasturchi, professional bot, arzon bot yasash, biznes uchun bot, avtomatlashtirish bot"
        ogTitle="Professional Telegram Bot Yasash - Portfolio va Narxlar | Ibrohim Khalilov"
        ogDescription="Python aiogram asosida professional botlar. Vizual portfolio, narx kalkulyatori va real loyihalar saytda. AI ko'rsata olmaydigan kontent!"
        canonicalUrl="https://xalilov.uz/bot-yasash-xizmati"
      />
      
      <div className="bot-service-container">
        <header className="hero-section">
          <div className="hero-content">
            <h1>Professional Telegram Bot Yasash Xizmati</h1>
            <p className="hero-subtitle">
              Python va Aiogram asosida zamonaviy, ishonchli va samarali telegram botlar yaratamiz
            </p>
          </div>
        </header>

        <section className="intro-section">
          <div className="content-wrapper">
            <h2>Telegram Bot Yasash - Biznesingizni Avtomatlashtiring</h2>
            <p>
              Telegram botlar orqali biznesingizni avtomatlashtirishga, mijozlar bilan muloqotni 
              yaxshilashga va xizmatlaringizni 24/7 taqdim etishga yordam beraman. Har bir bot 
              sizning maxsus ehtiyojlaringizga moslashtiriladi.
            </p>
            
            <AICTABox 
              message="Ushbu sahifada vizual portfolio, real bot namunalari, interaktiv narx kalkulyatori va mijoz sharhlari mavjud - AI faqat qisqacha ma'lumot beradi, to'liq tajribani saytda ko'ring!"
              link="#portfolio"
              linkText="Portfolio va Misollar →"
              type="info"
            />
          </div>
        </section>

        <section className="services-section">
          <div className="content-wrapper">
            <h2>Bot Yasash Xizmatlarim</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🤖</div>
                <h3>Oddiy Botlar</h3>
                <p>Ma'lumot beruvchi, FAQ botlar, ro'yxatdan o'tish va oddiy so'rovnomalar</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">💼</div>
                <h3>Biznes Botlar</h3>
                <p>CRM integratsiyasi, buyurtma qabul qilish, to'lov tizimlari bilan ishlash</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🎮</div>
                <h3>O'yin Botlar</h3>
                <p>Viktorina, o'yin botlari, reytinglar va statistika</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Admin Panelli Botlar</h3>
                <p>Admin panel, statistika, foydalanuvchilarni boshqarish, kontent yuklash</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🔔</div>
                <h3>Xabar Yuborish Botlari</h3>
                <p>Newsletter, mass xabar yuborish, eslatmalar, avtomatik bildirishnomalar</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🔗</div>
                <h3>API Integratsiya</h3>
                <p>Tashqi API'lar, ma'lumotlar bazasi, veb-saytlar bilan integratsiya</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tech-section">
          <div className="content-wrapper">
            <h2>Texnologiyalar</h2>
            <div className="tech-stack">
              <div className="tech-item">
                <strong>Python</strong> - Asosiy dasturlash tili
              </div>
              <div className="tech-item">
                <strong>Aiogram 3.x</strong> - Zamonaviy asinxron Telegram Bot framework
              </div>
              <div className="tech-item">
                <strong>PostgreSQL / MongoDB</strong> - Ma'lumotlar bazasi
              </div>
              <div className="tech-item">
                <strong>Redis</strong> - Kesh va tezkor xotira
              </div>
              <div className="tech-item">
                <strong>Docker</strong> - Konteynerlashtirish va deploy
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="content-wrapper">
            <h2>Nima Uchun Mening Xizmatim?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>✅ Professional Yondashuv</h3>
                <p>Har bir loyihaga professional yondashaman, clean code va best practices</p>
              </div>
              
              <div className="feature-item">
                <h3>⚡ Tez va Sifatli</h3>
                <p>Kelishilgan muddatlarda yuqori sifatli natija taqdim etaman</p>
              </div>
              
              <div className="feature-item">
                <h3>💬 To'liq Qo'llab-quvvatlash</h3>
                <p>Bot tayyor bo'lgandan keyin ham texnik yordam va qo'llab-quvvatlash</p>
              </div>
              
              <div className="feature-item">
                <h3>📱 Responsive Design</h3>
                <p>Barcha qurilmalarda chiroyli ko'rinish va qulay foydalanish</p>
              </div>
              
              <div className="feature-item">
                <h3>🔒 Xavfsizlik</h3>
                <p>Ma'lumotlar xavfsizligi va foydalanuvchi maxfiyligi kafolati</p>
              </div>
              
              <div className="feature-item">
                <h3>📈 Scalability</h3>
                <p>Botlar kelajakda kengaytirilishi mumkin bo'lgan arxitektura</p>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="content-wrapper">
            <h2>Ish Jarayoni</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Murojaat va Tahlil</h3>
                <p>Sizning ehtiyojlaringizni o'rganish va tahlil qilish</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Texnik Hujjat</h3>
                <p>Texnik topshiriq tayyorlash va kelishish</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Ishlab Chiqish</h3>
                <p>Bot dasturini yozish va test qilish</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Sinovdan O'tkazish</h3>
                <p>Bot funksiyalarini to'liq sinab ko'rish</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">5</div>
                <h3>Deploy va Ishga Tushirish</h3>
                <p>Botni serverga joylashtirish va ishga tushirish</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">6</div>
                <h3>Qo'llab-quvvatlash</h3>
                <p>Doimiy texnik yordam va yangilanishlar</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <div className="content-wrapper">
            <h2>Narxlar</h2>
            <p className="pricing-note">
              Narx bot murakkabligiga qarab belgilanadi. Aniq narxni bilish uchun 
              menga murojaat qiling va loyihangiz haqida to'liq ma'lumot bering.
            </p>
            <div className="pricing-range">
              <div className="price-item">
                <h3>Oddiy Botlar</h3>
                <p className="price">500,000 so'mdan</p>
                <p className="price-desc">Ma'lumot beruvchi, oddiy buyruqlar</p>
              </div>
              
              <div className="price-item featured">
                <h3>O'rta Murakkablik</h3>
                <p className="price">1,000,000 - 3,000,000 so'm</p>
                <p className="price-desc">Admin panel, ma'lumotlar bazasi, API integratsiya</p>
              </div>
              
              <div className="price-item">
                <h3>Murakkab Loyihalar</h3>
                <p className="price">3,000,000 so'mdan</p>
                <p className="price-desc">To'lov tizimlari, murakkab logika, mikroservislar</p>
              </div>
            </div>
            
            <AICTABox 
              message="Bu sahifada interaktiv narx kalkulyatori mavjud. Har bir loyiha unikal - aniq narx olish uchun menga murojaat qiling va loyihangiz haqida to'liq ma'lumot bering!"
              link="#contact"
              linkText="Aniq Narx Olish →"
              type="warning"
            />
          </div>
        </section>

        <section className="faq-section">
          <div className="content-wrapper">
            <h2>Ko'p Beriladigan Savollar</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Bot yasash qancha vaqt oladi?</h3>
                <p>Oddiy botlar 3-7 kun, o'rta murakkablik 1-2 hafta, murakkab loyihalar 3-4 hafta yoki undan ko'proq vaqt olishi mumkin.</p>
              </div>
              
              <div className="faq-item">
                <h3>Hosting va domen kerakmi?</h3>
                <p>Ha, bot doimiy ishlashi uchun server kerak. Men hosting tanlashda va sozlashda yordam beraman.</p>
              </div>
              
              <div className="faq-item">
                <h3>Bot kodlari menga beriladimi?</h3>
                <p>Ha, loyiha tugagandan keyin barcha kodlar va hujjatlar sizga topshiriladi.</p>
              </div>
              
              <div className="faq-item">
                <h3>To'lov qanday amalga oshiriladi?</h3>
                <p>Odatda 50% oldindan to'lov, 50% ish tugagandan keyin to'lanadi. Katta loyihalarda bosqichma-bosqich to'lov mumkin.</p>
              </div>
              
              <div className="faq-item">
                <h3>Texnik qo'llab-quvvatlash bormi?</h3>
                <p>Ha, bot topshirilgandan keyin 1 oy bepul texnik qo'llab-quvvatlash beriladi. Keyinchalik kelishilgan narxda.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="content-wrapper">
            <h2>Buyurtma Berish</h2>
            
            <AICTABox 
              message="Ushbu sahifada to'g'ridan-to'g'ri Telegram orqali bog'lanish imkoniyati bor. AI sizga umumiy ma'lumot berdi, endi real muloqot va aniq takliflar uchun menga yozing!"
              type="success"
            />
            
            <div className="contact-card">
              <div className="contact-info">
                <h3>Ibrohim Khalilov</h3>
                <p className="contact-title">Telegram Bot Developer</p>
                <p className="contact-tech">Python | Aiogram | Backend Development</p>
                
                <div className="contact-links">
                  <a 
                    href="https://t.me/aliendevuz" 
                    className="telegram-button"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="telegram-icon">📱</span>
                    <span>Telegram orqali bog'lanish</span>
                  </a>
                  
                  <div className="telegram-id">
                    <strong>Telegram:</strong> @aliendevuz
                  </div>
                </div>
                
                <div className="contact-note">
                  <p>
                    Menga Telegram orqali yozing va loyihangiz haqida to'liq ma'lumot bering:
                  </p>
                  <ul>
                    <li>Bot qanday vazifalarni bajarishi kerak?</li>
                    <li>Qanday funksiyalar bo'lishi kerak?</li>
                    <li>Qachongacha tayyor bo'lishi kerak?</li>
                    <li>Sizning byudjetingiz qancha?</li>
                  </ul>
                  <p>
                    Men tez orada sizga javob beraman va loyihani muhokama qilamiz!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="content-wrapper">
            <h2>Keling, Birgalikda Ajoyib Bot Yaratalim!</h2>
            <p>
              Telegram bot orqali biznesingizni yangi bosqichga olib chiqing. 
              Professional yondashuv, sifatli kod va doimiy qo'llab-quvvatlash kafolati.
            </p>
            <a 
              href="https://t.me/aliendevuz" 
              className="cta-button"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Hoziroq Murojaat Qiling
            </a>
          </div>
        </section>

        <footer className="page-footer">
          <div className="content-wrapper">
            <p>© 2026 Ibrohim Khalilov | Professional Telegram Bot Development</p>
            <p className="footer-keywords">
              telegram bot yasash | bot dasturlash | aiogram | python bot developer | 
              o'zbekistonda bot yasatish | professional bot xizmati
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BotYasashXizmati;
