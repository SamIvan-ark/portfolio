import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ( { project: { name, img, id } }) => (
  <NavLink to={`/project/${id}`}>
    <li className="project">
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{name}</h3>
    </li>
  </NavLink>
);

export default Project;
