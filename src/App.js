
import './App.css';
import { Home } from './pages/home';
import { Landing } from './pages/landing';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='main flex'>
      <Routes>
        <Route path='/welcome' element={<Landing />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
