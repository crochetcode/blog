import { Link } from 'react-router-dom';
import logo from '../logo.png';

export const Header = () => {
    return (
        <header className='flex spread'>
            <nav>
                <Link to='/home'>
                    <img src={logo} alt='logo' className='nav-logo' />
                </Link>
                <h2>Doily.Dev</h2>
            </nav>
            <nav>
                {/* sign in */}
            </nav>
        </header>
    )
}