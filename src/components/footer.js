export const Footer = () => {
    return (
        <nav className='flex-col splash'>
            {/* <div className='flex-col'>
                <h2>👋👋 hi! 👋👋</h2>
                <p>more coming soon</p>
            </div> */}
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
        </nav>
    )
}