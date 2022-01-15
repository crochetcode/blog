import logo from '../logo.png';
import {Link} from 'react-router-dom';

export const Landing = () => {
    return (
        <div className='main flex-col'>
        <div className='flex panel'>
          <img src={logo} className="logo" alt="logo" />
          <div className='flex-col'>
            <h1>Doily.Dev</h1>
            <Link to='/home'>
                <button>enter</button>
            </Link>
          </div>
        </div>
      </div>
    )
}