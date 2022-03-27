import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Link } from "react-router-dom";
import react from '../../assets/post-imgs/react.png'
import { postPreviews } from "../../constants/post-previews";

export const Stack = () => {
    window.scroll({
        top: 0,
        left: 0
    });

    const title = 'stack and tools';

    return (
        <div className='flex-col'>
            <Header subtitle='blog' />
            <div className="cover">
                <div className='post-page'>
                    <figure className='flex-col'>
                        <img src={react} alt="" />
                        <figcaption>This app uses the React.js framework</figcaption>
                    </figure>
                    <div className='text'>
                        <h1>{title}</h1>
                        <p>One of the best things about being a developer is getting to pick and choose the tools you use. It's amazing how many great resources are available for free.</p>
                        <p>I do my coding on a MacBook. Here are some of the important ingredients of this app as well as tools I use when coding it.</p>
                        <h2>Javascript</h2>
                        <p>Most web applications use HTML, CSS, and Javascript as their basic building blocks. A common analogy describes HTML as the structure of a house, CSS as the paint and decorations, and Javascript as the heating and cooling and electricity - essentially all the moving parts of the house.</p>
                        <p>I can add a basic button with HTML, change the color and font-size with CSS, but it is Javascript that makes something happen when you click the button.</p>
                        <p>Javascript was the coding language I learned first. At work I also use Java and some Typescript.</p>
                        <h2>React.js</h2>
                        <p>React is a Javascript framework, created by Facebook around 2011, that makes it easy to spin up a website quickly. Most of my home projects start by simply running</p> 
                        <p> <span className='code'>npx create-react-app {'<app-name>'}</span></p> 
                        <p>in the terminal.</p>
                        <p>I like how React does a lot of the set up for you. Using JSX (JavaScript Syntax Extension) makes it easy to blend HTML and Javascript together.</p>
                        <p>React was a big part of the curriculum at the coding bootcamp I attended. I also use React at work for Javascript projects (most of our work).</p>
                        <h2>SASS</h2>
                        <p>For most smaller projects I have a tendency to just use basic .css files for my styling. With this app being a larger project (that will only grow over time) I am trying to stay ahead of the organization of my CSS by using SASS.</p>
                        <p>Two features that I really enjoy are the ability to assign variables (such as commonly used colors) and the ability to nest CSS which makes it a easier to organize and group CSS elements.</p>
                        <p>At work we use components derived from Bootstrap with some splashes of SASS. For learning purposes, I try to use as much pure CSS styling as I can.</p>
                        <h2>Visual Studio Code</h2>
                        <p>For my IDE (integrated development environment), the place where I write my code, I use Visual Studio Code, a free tool by Microsoft. It is the tool I learned to code on and find the free version is very robust with a lot of plugins and features available.</p>
                        <p>At work I use a licensed version of IntelliJ; it is particularly useful when coding in Java. I also really like a lot of the testing and debugging tools it has. I am eventually planning to shift over to using the community version of IntelliJ more at home as I think it would be a good way to practice shortcuts and explore advanced features.</p>
                        <h2>Github</h2>
                        <p>Version control is essential to any coding project. Think of it as having a place to save your work. It also allows multiple people to coordinate on the same code base.</p>
                        <p>At work I use both GitHub and BitBucket. I prefer GitHub - it's that what I use for all my personal projects. You can view the code for this project <a href='https://github.com/crochetcode/doily-dev' target='_blank' rel='noreferrer'>here</a>.</p>
                        <h2>Digital Ocean</h2>
                        <p>This app is hosted through Digital Ocean. At the bootcamp I attended we completed both a personal and group project at the end of the course - neither project was considered completed until it was hosted on the internet.</p>
                        <p>At the time, I found hosting almost harder than writing the code itself but am looking to grow in my knowledge of deploying code. For this app, I am currently doing manual deployments but hope to move to more automated pipeline as this app evolves.</p>
                        <p>For those curious it costs about $10 bucks a month to host this app (and I can use the same plan to host other sites as well). There are also cheaper tiers available.</p>
                        <h2>Google domains</h2>
                        <p>You can find domains for pretty cheap. I pay $12 bucks a year for the doily.dev domain. It simply slaps a pretty URL name over where my website is hosted; otherwise, you would have to visit my website at 68.183.22.2:3002.</p>
                        <br />
                        <p>I currently don't have a database set up with this app. As the blog grows and expands that might be added later.</p>
                    </div>
                </div>
                <div className='flex-col'>
                    <h1>more</h1>
                    <div className='post-container'>
                        {postPreviews.filter(postPreview => postPreview.h2 !== title)
                        .map(postPreview => {
                            return (
                                <Link to={postPreview.link}>
                                <div className="post-preview">
                                    <div className="post-text">
                                        <h2>{postPreview.h2}</h2>
                                        <p>{postPreview.p}</p>
                                    </div>
                                    <img src={postPreview.img} alt="" />
                                </div>
                            </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}