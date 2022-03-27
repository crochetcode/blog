import logo from '../assets/thread.png';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Link } from 'react-router-dom';
import { postPreviews } from '../constants/post-previews';

export const Home = () => {
    window.scroll({
        top: 0,
        left: 0
    });

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
                    <h1>recent posts</h1>
                    <div className="post-container">
                        {postPreviews.map(postPreview => {
                            return (
                                <Link to={postPreview.link}>
                                    <div className="post-preview">
                                        <div className="post-text">
                                            <p className='date'>{postPreview.date}</p>
                                            <br />
                                            <h2>{postPreview.h2}</h2>
                                            <p>{postPreview.p}</p>
                                        </div>
                                        <img src={postPreview.img} alt="" />
                                    </div>
                                </Link>
                                )
                        })}
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
