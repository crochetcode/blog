import '../css/App.scss';
import '../css/Post.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { About } from '../pages/posts/about';
import { Stack } from '../pages/posts/stack';

function App() {
  return (
    <div className='flex'>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog/03-26-22' element={<Stack />} />
      </Routes>
    </div>
  );
}

export default App;
