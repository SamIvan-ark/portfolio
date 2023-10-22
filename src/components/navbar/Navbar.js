import { NavLink } from 'react-router-dom';
import ThemeBtn from '../themeBtn/ThemeBtn';
import './style.css';

const Navbar = () => {
  const getNavItemClass = ({ isActive }) => isActive ? 'nav-list__link nav-list__link--active' : 'nav-list__link';;

  return (
    <nav className="nav">
      <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>Frontend developer</strong> portfolio
            </NavLink>

            <ThemeBtn />

            <ul className="nav-list">
              <li className="nav-list__item"><NavLink to="/" className={getNavItemClass}>Home</NavLink></li>
              <li className="nav-list__item"><NavLink to="/projects" className={getNavItemClass}>Projects</NavLink></li>
              <li className="nav-list__item"><NavLink to="/contacts" className={getNavItemClass}>Contacts</NavLink></li>
            </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;