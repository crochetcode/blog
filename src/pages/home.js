import logo from '../assets/thread.svg';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Home = () => {
    return (
        <>
            <Header />
            <div className='flex-col main'>
                <div className='flex'>
                    <img src={logo} className='logo-spin' alt='logo' />
                </div>
            </div>
            <Footer />
        </>
    )
}
