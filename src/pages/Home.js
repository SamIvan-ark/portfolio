import Header from '../components/header/Header';

const Home = () => (
  <>
    <Header />
    <main className="section">
      <div className="container">
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Frontend</h2>
            <p>JavaScript, JavaScript, ReactJS, JavaScript, Redux, HTML, CSS, NPM, BootStrap, JavaScript, JavaScript, JavaScript, JavaScript</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Backend</h2>
            <p>NodeJS, NodeJS, NodeJS, NodeJS, NodeJS</p>
          </li>
        </ul>
      </div>
    </main>
  </>
);

export default Home;