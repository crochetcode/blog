import logo from '../logo.png';
import { Link } from 'react-router-dom';

export const Landing = () => {
    return (
        <div className='flex panel'>
            <img src={logo} className='logo' alt='logo'/>
            <div className='flex-col'>
                <div className='flex'>
                    <h1>Doily.Dev</h1>
                </div>
                <Link to='/'>
                    <button>enter</button>
                </Link>
            </div>
        </div>
    )
}