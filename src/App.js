import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className='main flex-col'>
      <div className='flex panel'>
        <img src={logo} className="logo" alt="logo" />
        <div className='flex-col'>
          <h1>Doily.Dev</h1>
          <button>coming soon</button>
        </div>
      </div>
    </div>
  );
}

export default App;
