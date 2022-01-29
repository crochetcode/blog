import { Link } from "react-router-dom"

export const Links = () => {
    return (
        <div className='flex panel'>
            <div className='flex-col'>
                <h2>links</h2>
                <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer'>
                    <button className='text-align-start'>
                        <i class="fab fa-instagram"></i>
                        &nbsp;instagram&nbsp;
                        <i class="fas fa-external-link-alt"></i>
                    </button>
                </a>
                <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer'>
                    <button className='text-align-start'>
                        <i class="fab fa-github"></i>
                        &nbsp;github&nbsp;
                        <i class="fas fa-external-link-alt"></i>
                    </button>
                </a>
                <Link to='/spotify'>
                    <button className='text-align-start'>
                        <i class="fab fa-spotify"></i>
                        &nbsp;spotify
                    </button>
                </Link>
            </div>
        </div>
    )
}