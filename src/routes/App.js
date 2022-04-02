import '../css/App.scss';
import '../css/Header.scss';
import '../reset.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { about } from '../pages/posts/about';
import { stack } from '../pages/posts/stack';
import { Post } from '../components/post';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function App() {
  return (
    <div className='flex-col'>
      <Header className='flex'/>
      <div className="container">
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/about' element={<Post postContent={about} id={1}/>} />
        <Route path='/blog/03-26-22' element={<Post postContent={stack} id={2} />} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
