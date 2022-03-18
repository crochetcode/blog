import logo from '../assets/thread.png';
import { Header } from '../components/header';

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
            </main>
        </>
    )
}
