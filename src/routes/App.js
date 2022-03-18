import '../css/App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';

function App() {
  return (
    <div className='flex'>
      <Routes>
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
