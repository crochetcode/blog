import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className='main'>
      <header className='flex'>
        <img src={logo} className="logo" alt="logo" />
        <div className='flex-col'>
          <h2>Doily.Dev</h2>
          <button>enter</button>
        </div>
      </header>
    </div>
  );
}

export default App;
