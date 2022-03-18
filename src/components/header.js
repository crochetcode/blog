import { useState } from 'react';

export const Header = () => {
    const [menu, showMenu] = useState(false);

    return (
        <header className='flex'>
            <h2>DOILY DEV</h2>
            {!menu && <i className='fa-solid fa-bars' onClick={() => showMenu(true)}></i>}
            {menu && <i class='fa-solid fa-xmark' onClick={() => showMenu(false)}></i>}
            {menu && <nav className='flex-col'>
                <div>
                    <h2>👋👋 hi! 👋👋</h2>
                    <p>more coming soon</p>
                </div>
            </nav>}
        </header>
    )
}