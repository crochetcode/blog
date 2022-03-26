import logo from '../assets/thread.png';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <div className='flex-col splash'>
                    <div className='flex-col words'>
                        <h1>musings of a junior developer</h1>
                        {/* <p>and a smattering of side projects</p> */}
                    </div>
                    <img src={logo} className='logo-spin' alt='logo' />
                </div>
                <div className='flex-col splash'>
                    {/* <h1>blog</h1> */}
                    <h1>about</h1>
                    <div className="post-container">
                        <Link to='/about'>
                        <div className="post">
                            <div className="post-text">
                                {/* <h2>about</h2> */}
                                <p>Hi! I'm Fred.</p>
                            </div>
                            <img src='https://i.pinimg.com/originals/fe/8f/7d/fe8f7df7be0dbfa73add9cfbc1cf8cad.jpg' alt="" />
                        </div>
                        </Link>
                        {/* <div className="post">
                            <div className="post-text">
                                <h2>about</h2>
                                <p>Hi! I'm Fred.</p>
                            </div>
                            <img src='https://i.pinimg.com/originals/fe/8f/7d/fe8f7df7be0dbfa73add9cfbc1cf8cad.jpg' alt="" />
                        </div>
                        <div className="post">
                            <div className="post-text">
                                <h2>about</h2>
                                <p>Hi! I'm Fred.</p>
                            </div>
                            <img src='https://i.pinimg.com/originals/fe/8f/7d/fe8f7df7be0dbfa73add9cfbc1cf8cad.jpg' alt="" />
                        </div>
                        <div className="post">
                            <div className="post-text">
                                <h2>about</h2>
                                <p>Hi! I'm Fred.</p>
                            </div>
                            <img src='https://i.pinimg.com/originals/fe/8f/7d/fe8f7df7be0dbfa73add9cfbc1cf8cad.jpg' alt="" />
                        </div> */}
                    </div>
                </div>
                <Footer/>
                {/* <nav className='flex-col splash'>
                    <div className='flex-col'>
                        <h2>👋👋 hi! 👋👋</h2>
                        <p>more coming soon</p>
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
                </nav> */}
            </main>
        </>
    )
}
