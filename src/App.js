import './App.css';
import { Pulse } from './components/pulse';
import { HLIs } from './components/initiatives'

function App() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className='container'>
        <HLIs />
        <Pulse />
      </div>
    </>
  );
}

export default App;
