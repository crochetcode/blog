import { Footer } from "../components/footer"
import { Header } from "../components/header"

export const Home = () => {
    return (
        <div className='main flex'>
            <Header/>
            <div className='flex panel'>
                <div className='flex-col'>
                    <h2>projects</h2>
                    <button>coming soon</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}