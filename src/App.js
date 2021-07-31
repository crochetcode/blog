import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex'>
          <h1 className='bracket'>{'{'}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='bracket'>{'}'}</h1>
        </div>
        <br/>
        <h1>Fred Davison</h1>
        <h2>Web Developer</h2>
      </header>
    </div>
  );
}

export default App;
