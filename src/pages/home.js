import logo from '../assets/thread.png';
// import { Header } from '../components/header';

export const Home = () => {
    return (
        <div className='flex-col'>
            <div className='flex-col main'>
                <div className='flex-col'>
                    <h1>DOILY DEV</h1>
                    <img src={logo} className='logo' alt='logo' />
                    <div className="flex">
                    </div>
                </div>
                {/* <div>
                <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer'>
                <button><i class="fab fa-github"></i> Github</button>
                </a>
                <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer'>
                <button><i class="fab fa-instagram"></i> Instagram</button>
                </a>
            </div> */}
            </div>
            {/* <Header/> */}
            <main className='blog'>
                <div className="triangle">
                    <h2>blog</h2>
                </div>
                <div className="triangle2"></div>
                <div className="boxes">
                    <div className="box">
                        <img src='https://i.pinimg.com/originals/fe/8f/7d/fe8f7df7be0dbfa73add9cfbc1cf8cad.jpg' alt="" />
                        <p>march 12th: mission statement</p>
                    </div>
                    <div className="box">
                        <img src='https://screenmusings.org/movie/blu-ray/Inferno/images/Inferno-352.jpg' alt="" />
                        <p>march 13th: parallax</p>
                    </div>
                    <div className="box">
                        <h2>see more</h2>
                    </div>
                </div>
            </main>
            <div className="triangle3"></div>
            <main className='links'>
                <div className='flex'>
                    <h2>links</h2>
                    <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer'>
                        <i class="fab fa-github"></i>
                    </a>
                    <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer'>
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </main>
        </div>
    )
}
