import '../css/App.scss';
import '../css/Post.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { About } from '../pages/posts/about';

function App() {
  return (
    <div className='flex'>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
