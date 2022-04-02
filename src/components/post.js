import { Link } from "react-router-dom"
import { postPreviews } from "../constants/post-previews"

export const Post = props => {
    window.scroll({
        top: 0,
        left: 0
    });

    return (
        <>
            <div className='post'>
                {props.postContent}
            </div>
            <h1>more posts</h1>
            <div className="preview-container">
                {postPreviews
                    .filter(postPreview => postPreview.id !== props.id)
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
        </>
    )
}