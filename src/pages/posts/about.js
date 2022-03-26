import { Footer } from "../../components/footer"
import { Header } from "../../components/header"

export const About = () => {
    return (
        <div className='flex-col'>
            <Header subtitle='about'/>
            <div className="cover">
            <div className='post-page'>
                <img src='https://i.pinimg.com/originals/fe/8f/7d/fe8f7df7be0dbfa73add9cfbc1cf8cad.jpg' alt="" />
                <div className="text">
                    <h1>about</h1>
                    <p>Hi! I'm Fred.</p>
                    <p>A couple of years ago, I switched from working in a railyard to starting a career as a software engineer.</p>
                    <h2>About this blog</h2>
                    <p>I learned to code at a 3-month coding bootcamp. I made this blog to encourage me to keep up that same spirit of learning and discovery.</p>
                    <p>I'll honest, at first this blog will mostly be for me - a fun project where I can play with designs, try out different technologies, and research best practices.</p>
                    <h2>Why "doily dev"?</h2>
                    <p>I occasionally crochet. I'm partial to making small doilies - easier to hide all my tiny mistakes.</p>
                    <p>I feel like there is some overlap between crocheting and coding. At its best, both are about following patterns and making something beautiful, but, if you're not careful you can end up with a tangled mess.</p>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}