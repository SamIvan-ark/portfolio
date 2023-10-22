import vkIcon from '../../img/icons/vk.svg';
import instagramIcon from '../../img/icons/instagram.svg';
import twitterIcon from '../../img/icons/twitter.svg';
import gitHubIcon from '../../img/icons/gitHub.svg';
import linkedInIcon from '../../img/icons/linkedIn.svg';
import './style.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item"><a href="#!"><img src={vkIcon} alt="Link" /></a></li>
                <li className="social__item"><a href="#!"><img src={instagramIcon} alt="Link" /></a></li>
                <li className="social__item"><a href="#!"><img src={twitterIcon} alt="Link" /></a></li>
                <li className="social__item"><a href="#!"><img src={gitHubIcon} alt="Link" /></a></li>
                <li className="social__item"><a href="#!"><img src={linkedInIcon} alt="Link" /></a></li>
            </ul>
            <div className="copyright">
                <p>© 2023, Ivan on <a href="https://github.com/SamIvan-ark">GitHub</a></p>
            </div>
        </div>
    </div>
  </footer>
);
 
export default Footer;