function HeroSection() {
  return (
    <header className="hero-card section-card">
      <div className="flower flower-top-left" aria-hidden="true" />
      <div className="flower flower-bottom-right" aria-hidden="true" />

      <p className="kicker">Свадебное приглашение</p>
      <h1 className="names">Виктория и Иван</h1>
      <p className="date">1 августа 2026</p>

      <h2 className="invite-title">Вы приглашены на нашу свадьбу</h2>
      <p className="lead">Дорогие друзья!</p>
      <p className="body-copy centered">
        С искренней радостью приглашаем вас разделить с нами один из самых
        важных дней нашей жизни. Будем счастливы провести этот день в атмосфере
        тепла, любви и семейного уюта вместе с вами.
      </p>
    </header>
  );
}

export default HeroSection;
