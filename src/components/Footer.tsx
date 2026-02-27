export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            Xalilov<span>Ibrohim</span>
          </div>
          <nav className="footer-links">
            <a href="https://github.com/aliendevuz/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://t.me/tech_bro_uz" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://blog.xalilov.uz/" target="_blank" rel="noopener noreferrer">Blog</a>
            <a href="mailto:aliendevuz@gmail.com">Email</a>
          </nav>
        </div>
        <p className="footer-copy" style={{ marginTop: '1.5rem' }}>
          © {year} Xalilov Ibrohim · xalilov.uz · Barcha huquqlar himoyalangan
        </p>
      </div>
    </footer>
  );
}
