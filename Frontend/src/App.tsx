import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Members from './pages/Members';
import Works from './pages/Works';
import Hire from './pages/Hire';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Legal from './pages/Legal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="members/:id" element={<Portfolio />} />
          <Route path="works" element={<Works />} />
          <Route path="hire" element={<Hire />} />
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Legal />} />
          <Route path="terms" element={<Legal />} />
          <Route path="*" element={<div className='text-center py-20 dark:text-white'>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
