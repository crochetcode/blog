import logo from '../assets/thread.png';
import { Header } from '../components/header';

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <div className='flex-col splash'>
                    <div className='flex-col words'>
                        {/* <h1>DOILY DEV</h1> */}
                        <h1>personal blog of a junior developer</h1>
                    </div>
                    <img src={logo} className='logo-spin' alt='logo' />
                </div>
            </main>
        </>
    )
}
