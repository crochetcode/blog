import logo from '../assets/thread.png';

export const Home = () => {
    return (
        <div className='flex-col main'>
            <div className='flex-col'>
                <div className='flex'>
                    <h1>DOILY DEV</h1>
                </div>
                <img src={logo} className='logo' alt='logo' />
            </div>
            <div>
                <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer'>
                    <button><i class="fab fa-github"></i> Github</button>
                </a>
                <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer'>
                    <button><i class="fab fa-instagram"></i> Instagram</button>
                </a>
                <a href='https://twitter.com/doilydev' target='_blank' rel='noreferrer'>
                    <button><i class="fab fa-twitter"></i> Twitter</button>
                </a>
            </div>
        </div>
    )
}
