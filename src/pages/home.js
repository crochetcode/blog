import { Footer } from "../components/footer"
import { Header } from "../components/header"

export const Home = () => {
    return (
        <div className='main flex'>
            <Header />
            <div className='flex panel'>
                <div className='flex-col'>
                    <h2>links</h2>
                    <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer'>
                        <button className='text-align-start'>
                            <i class="fab fa-instagram"></i>
                            &nbsp;instagram
                        </button>
                    </a>
                    <a href='https://github.com/crochetcode' target='_blank' rel='noreferrer'>
                        <button className='text-align-start'>
                            <i class="fab fa-github"></i>
                            &nbsp;github
                        </button>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}