import { BrowserRouter as Router,Routes, Route, useParams} from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage.js';
import TeamPage from './pages/TeamPage.js';
import DiscussProjectPage from './pages/DiscussProjectPage.js';
import NotFoundPage from './pages/NotFoundPage.js';

import './assets/css/styles.css';
import './App.css'

function Topic() {
   let { id } = useParams();
   return <ProjectDetailPage id={id} location={'/project'}/>;
 }

function App() {
   const [isLogin, setisLogin] = useState(false);
  const [isSignup, setisSignup] = useState(true);
  const [user,setUser] = useState({});
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<LandingPage location={'/'} />} />
      <Route exact path="/project" element={<ProjectPage location={'/project'}/>} />
      <Route exact path="/project/:id" element={<Topic/>} />
      <Route exact path="/team" element={<TeamPage location={"/team"}/>} />
      <Route exact path="/discuss-project" element={<DiscussProjectPage location={'/discuss-project'} isLogin={isLogin} isSignup={isSignup} setisLogin={setisLogin} setisSignup={setisSignup} user={user} setUser={setUser}/>} />
      <Route path="" element={<NotFoundPage />} />
    </Routes>
    </Router>
  );
}

export default App;
