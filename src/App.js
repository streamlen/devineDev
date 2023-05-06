import { BrowserRouter as Router,Routes, Route, useParams} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage.js';
import TeamPage from './pages/TeamPage.js';
import DiscussProjectPage from './pages/DiscussProjectPage.js';
import NotFoundPage from './pages/NotFoundPage.js';

import './assets/css/styles.css';
import './App.css'

function App() {
   let { id } = useParams();
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<LandingPage location={'/'} />} />
      <Route exact path="/project" element={<ProjectPage location={'/project'} />} />
      <Route exact path="/project/:id" element={<ProjectDetailPage location={id} />} />
      <Route exact path="/team" element={<TeamPage location={"/team"}/>} />
      <Route exact path="/discuss-project" element={<DiscussProjectPage location={'/discuss-project'}/>} />
      <Route path="" element={<NotFoundPage />} />
    </Routes>
    </Router>
  );
}

export default App;
