import logo from '../logo.png';

export const Header = () => {
    return (
        <header className='flex'>
            <div className='header-content flex spread'>
                <nav>
                    <img src={logo} alt='logo' className='nav-logo' />
                    <h3>DOILY DEV</h3>
                </nav>
                <nav>
                    <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer'>
                        <i class="fab fa-github"></i>
                    </a>
                    <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer'>
                        <i class="fab fa-instagram"></i>
                    </a>
                </nav>
            </div>
        </header>
    )
}