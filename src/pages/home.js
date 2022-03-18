import logo from '../assets/thread.svg';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <div className='flex-col splash'>
                    <div className='flex'>
                        <img src={logo} className='logo-spin' alt='logo' />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}
