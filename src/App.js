import './App.css';
import { Pulse } from './components/pulse';
import { Slideshow} from './components/slideshow'

function App() {
  return (
    <>
      <h3>Dashboard</h3>
      <div className='container'>
        <Slideshow/>
        <Pulse />
      </div>
    </>
  );
}

export default App;
