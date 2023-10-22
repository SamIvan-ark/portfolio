import Project from '../components/project/Project';
import projectsList from '../helpers/projectsList';

const Projects = () => (
  <main className="section">
    <div className="container">
      <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectsList.map((project) => <Project key={project.id} project={project} />)}
        </ul>
    </div>
  </main>
);

 
export default Projects;