import { useParams } from 'react-router-dom';
import GitHubBtn from '../components/gitHubBtn/GitHubBtn';
import projects from '../helpers/projectsList';

const Project = () => {
  const { projectId } = useParams();
  const { name, skills, imgBig, gitHub } = projects[projectId];

  return (
    <main className="section">
      <div className="container">
          <div className="project-details">
              <h1 className="title-1">{name}</h1>
              <img src={imgBig} alt="" className="project-details__cover" />
              <div className="project-details__desc">
                  <p>{skills}</p>
              </div>
              {gitHub ? <GitHubBtn link={gitHub} /> : null }
          </div>
      </div>
    </main>
  );
}
 
export default Project;