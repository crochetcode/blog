
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <div className='main flex'>
      <Header />
      <Routes>
        <Route path='/*' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
