const Home = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px'
    }}>
      <h1>Xush kelibsiz!</h1>
      <p>Bot yasash xizmati sahifasiga o'tish uchun pastdagi tugmani bosing:</p>
      <a 
        href="/bot-yasash-xizmati"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '25px',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '600',
          transition: 'transform 0.3s'
        }}
      >
        Bot Yasash Xizmati
      </a>
    </div>
  );
};

export default Home;
