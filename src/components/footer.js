import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <nav className='flex splash'>
            <div className='flex links'>
                <Link to='/'>
                <div className='flex social' onClick={() => window.scrollTo(0, 0)}>
                <i class="fa-solid fa-house"></i>
                </div>
                </Link>
                <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer' className='flex social'>
                    <i class="fab fa-github"></i>
                </a>
                <a href='https://www.linkedin.com/in/fdavison1/' target='_blank' rel='noreferrer' className='flex social'>
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer' className='flex social'>
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </nav>
    )
}