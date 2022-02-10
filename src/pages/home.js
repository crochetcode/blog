import logo from '../assets/thread.png';

export const Home = () => {
    return (
        <div className='flex-col main spread'>
            <div>
                <div>
                    <h1>DOILY</h1>
                </div>
                <div className='flex spread'>
                    <h1>DEV</h1>
                    <img src={logo} className='logo' alt='logo' />
                </div>
            </div>
            <div>
                <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer'>
                    <button><i class="fab fa-github"></i> Github</button>
                </a>
                <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer'>
                    <button><i class="fab fa-instagram"></i> Instagram</button>
                </a>
            </div>
        </div>
    )
}