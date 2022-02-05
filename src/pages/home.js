import { Routes, Route } from "react-router-dom"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Links } from './links';
import { Spotify } from "./spotify";

export const Home = () => {
    return (
        <div className='main flex'>
            <Header />
            <Routes>
                <Route path='*' element={<Links />} />
                <Route path='/spotify/*' element={<Spotify />} />
            </Routes>
            <Footer />
        </div>
    )
}