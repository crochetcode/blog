import { Footer } from "../../components/footer"
import { Header } from "../../components/header"

export const About = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    return (
        <div className='flex-col'>
            <Header subtitle='about' />
            <div className="cover">
                <div className='post-page'>
                    <figure className='flex-col'>
                        <img src='https://i.pinimg.com/originals/fe/8f/7d/fe8f7df7be0dbfa73add9cfbc1cf8cad.jpg' alt="" />
                        <figcaption>Just another day at the office</figcaption>
                    </figure>
                    <div className="text">
                        <h1>about</h1>
                        <p>Hi! I'm Fred.</p>
                        <p>A couple of years ago, I switched from working in a railyard to starting a career as a software engineer.</p>
                        <h2>About the blog</h2>
                        <p>I learned to code from a 3-month web developer bootcamp course. I really enjoyed the fast-paced learning and hands-on projects; I'm hoping to recapture some of that energy here.</p>
                        <p>At first, this blog will probably be mostly for me - a fun side project where I can try out different technologies and designs and get some experience keeping code maintainable.</p>
                            
                        <p>But perhaps one day it might be something worth sharing with others too. I find a lot of the how-tos out there to be a little on the technical side; I will try to keep the posts here bite-sized and straight-forward.</p>
                        <h2>Why doily dev?</h2>
                        <p>I occasionally crochet. When I do I'm partial to making small doilies - you can see blurry pictures of them on <a href='https://www.instagram.com/doily.dev' target='_blank' rel='noreferrer'>my Instagram</a>.</p>
                        <p>I do feel that there is some overlap between crocheting and coding. At their best, both are about following patterns and making something beautiful but, if you're not careful, you can end up with a tangled mess.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}