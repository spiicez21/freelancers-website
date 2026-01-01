import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Members from './pages/Members';
import Works from './pages/Works';
import Hire from './pages/Hire';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import HowItWorks from './pages/HowItWorks';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import HelpCenter from './pages/HelpCenter';
import HiringGuide from './pages/HiringGuide';
import ServerStatus from './pages/ServerStatus';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Onboarding from './pages/Onboarding';
import Admin from './pages/Admin';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="members/:id" element={<Portfolio />} />
          <Route path="works" element={<Works />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/about" element={<About />} />
          <Route path="/works/:id" element={<ProjectDetail />} />
          <Route path="/members/:id" element={<Portfolio />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path="guide" element={<HiringGuide />} />
          <Route path="status" element={<ServerStatus />} />
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Signup />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<div className='text-center py-20 dark:text-white'>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
