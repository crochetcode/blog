import logo from '../assets/thread.png';
import { Link } from 'react-router-dom';
import { postPreviews } from '../constants/post-previews';

export const Home = () => {
    window.scroll({
        top: 0,
        left: 0
    });

    return (
        <>
            <div className='flex-col page'>
                <div className='flex-col'>
                    <h1>musings of a (somewhat) new developer</h1>
                </div>
                <img src={logo} className='logo-spin' alt='logo' />
            </div>
            <div className='tall flex-col'>
                <h1>recent posts</h1>
                <div className="preview-container">
                {postPreviews
                    .map(postPreview => {
                        return (
                            <Link to={postPreview.link}>
                                <div className="post-preview">
                                    <img src={postPreview.img} alt="" />
                                    <div className="preview-text">
                                        <p className='date'>{postPreview.date}</p>
                                        <br />
                                        <h2>{postPreview.h2}</h2>
                                        <p>{postPreview.p}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
