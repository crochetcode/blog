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
                    </div>
                    <img src={logo} className='logo-spin' alt='logo' />
                </div>
                <div className='flex-col splash'>
                    <h1>about</h1>
                    <div className="post-container">
                        <Link to='/about'>
                            <div className="post-preview">
                                <div className="post-text">
                                    <p>Hi! I'm Fred.</p>
                                </div>
                                <img src='https://i.pinimg.com/originals/fe/8f/7d/fe8f7df7be0dbfa73add9cfbc1cf8cad.jpg' alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
