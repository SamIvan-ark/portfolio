import './style.css';

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hi, this is <em>Ivan</em></strong><br />
            a frontend developer
        </h1>
        <div className="header__text">
            <p>Very good 100% new</p>
        </div>
        <a href="#!" className="btn">Download CV</a>
    </div>
  </header>
);

export default Header;