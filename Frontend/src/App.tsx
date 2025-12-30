import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Members from './pages/Members';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members />} />
          {/* Placeholder routes for now */}
          <Route path="works" element={<div className='text-center py-20 dark:text-white'>Works Page Coming Soon</div>} />
          <Route path="hire" element={<div className='text-center py-20 dark:text-white'>Hire Page Coming Soon</div>} />
          <Route path="about" element={<div className='text-center py-20 dark:text-white'>About Page Coming Soon</div>} />
          <Route path="*" element={<div className='text-center py-20 dark:text-white'>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
