import { useState } from 'react';

export const Header = props => {
    const [menu, showMenu] = useState(false);

    return (
        <header className='flex'>
            <h2>DOILY DEV</h2>
            {props.subtitle && <h3>{props.subtitle}</h3>}
            {!menu && <i className='fa-solid fa-bars' onClick={() => showMenu(true)}></i>}
            {menu && <i class='fa-solid fa-xmark' onClick={() => showMenu(false)}></i>}
            {menu && <nav className='flex-col'>
                <div className='flex-col nav'>
                    <h2>home</h2>
                    <h2>about</h2>
                    <h2>blog</h2>
                </div>
                <div className='flex links'>
                    <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer' className='flex'>
                        <i class="fab fa-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/fdavison1/' target='_blank' rel='noreferrer' className='flex'>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer' className='flex'>
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </nav>}
        </header>
    )
}