import gitHubIcon from '../../img/icons/gitHub-black.svg';
import './style.css';

const GitHubBtn = ({ link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      View source code on GitHub
  </a>
);
 
export default GitHubBtn;
