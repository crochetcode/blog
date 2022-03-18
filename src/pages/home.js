import logo from '../assets/thread.svg';

export const Home = () => {
    return (
        <>
            <header className='flex'>
                <h2>DOILY DEV</h2>
                <i className="fa-solid fa-bars"></i>
            </header>
            <div className='flex-col main'>
                <div className='flex-col'>
                    <img src={logo} className='logo-spin' alt='logo' />
                </div>
            </div>
            <footer className='flex'>
                <nav className='flex'>
                    <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer' className='flex'>
                        <i class="fab fa-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/fdavison1/' target='_blank' rel='noreferrer' className='flex'>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer' className='flex'>
                        <i class="fab fa-instagram"></i>
                    </a>
                </nav>
            </footer>
        </>
    )
}
