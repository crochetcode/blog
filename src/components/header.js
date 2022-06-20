import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [menu, showMenu] = useState(false);
    const headerClass = `flex ${menu && 'no-scroll'}`
    const navClass = `flex-col ${menu && 'no-scroll'}`

    return (
        <header className={headerClass}>
            <Link to='/'>
                <h1 onClick={() => showMenu(false)}>DOILY DEV</h1>
            </Link>
            {!menu && <i className='fa-solid fa-bars' onClick={() => showMenu(true)}></i>}
            {menu && <i className='fa-solid fa-xmark' onClick={() => showMenu(false)}></i>}
            {menu && <nav className={navClass}>
                <div className='flex-col nav'>
                    <Link onClick={() => showMenu(false)} to='/'>
                        <h2>home</h2>
                    </Link>
                    <Link onClick={() => showMenu(false)} to='/about'>
                        <h2>about</h2>
                    </Link>
                </div>
                <div className='flex links'>
                    <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer' className='flex social'>
                        <i class="fab fa-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/fdavison1/' target='_blank' rel='noreferrer' className='flex social'>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer' className='flex social'>
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </nav>}
        </header>
    )
}