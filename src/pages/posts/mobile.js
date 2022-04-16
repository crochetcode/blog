export const mobile = (
    <>
        <p className='date'>April 16th, 2022</p>
        <figure className='flex-col'>
            <img src='https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="" />
            <figcaption>15% of American adults are “smartphone-only” internet users</figcaption>
        </figure>
        <div className='text'>
            <h1>mobile-first design</h1>
            <p>I have made a commitment to using a mobile-first approach when designing and coding this site.</p>
            <h2>What does that look like?</h2>
            <p>I might sketch out a quick wireframe in my notebook before starting to code, especially if the design is a little more complicated or I'm not exactly sure how I want it to look.</p>
            <p>Whenever I add a new page or component, I first view the page in a small, skinny window as if it were someone's device. Specifically, I use Chrome's inspect tool (right-click the browser page, select Inspect, then click the mobile button towards the top). I tend to select one of the iPhone options, both because this is a popular choice of phone owners and because some of the iPhones are pretty narrow and I want to ensure all my content will fit. </p>
            <p>Once I have finalized the html/css for mobile, only then will I exit out of the mobile-view and see what the current code looks like on a bigger screen. (Sometimes that can be quite a surprise.) If the larger screen needs some adjustments, I will make a media query specifying a minimum screen size.</p>
            <h2>Example: selective use of hovers</h2>
            <p>On a computer screen you expect certain elements such as buttons to change when you hover the mouse over them. At the very least, you would probably expect the regular cursor to change to a pointer finger to indicate the element is something you can click. </p>
            <p>While using mobile-first design, I realized that, on a phone, since there is no mouse there is no need for this type of hover effect. In fact, I found that I didn't like it when a button would change colors only at the exact moment the user pressed it with their thumb. I stopped using hovers in my main code but instead added specific media queries to only add hovers for a larger screen. </p>
            <p>Here is what the code looks like:</p>
            <div className="code-block">
                <div className='code'>
                    {'@media (min-width: 600px) {'}
                </div>
                <div className='code'>
                    &emsp;{'.social:hover {'}
                </div>
                <div className='code'>
                    &emsp;&emsp;{'background: $secondary;'}
                </div>
                <div className='code'>
                    &emsp;{'}'}
                </div>
                <div className='code'>
                    {'}'}
                </div>
            </div>
            <p>The code is for the small social media links in the footer; they only use a hover effect on a screen larger than 600px.</p>
            <h2>Why mobile first?</h2>
            <p>There are some interesting statistics about the growth of smart phone users over the past few years, but the statistic that really sticks out to me is that, according to the Pew Research Center<sup>1</sup>, 15% of American adults are “smartphone-only” internet users, meaning they will only ever see this site from a mobile view. </p>
            <p>It has also occurred to me that, if I were to text a link of this site to a friend or share it on social media, the recipient would almost certainly open the site on their phone first and I would want the site to make a good first impression. </p>
            <p>From a practical standpoint, it is a lot easier to expand a small design out onto a larger screen than it is to cram a large design into a much smaller space. In the past, I would code using my full browser page and found that it could be really hard to fit readable text or pictures onto a smaller screen when I went to make the project mobile-friendly as an afterthought. </p>
            <hr />
            <p><span className='footnote'>1</span> Pew Research Center <a href='https://www.pewresearch.org/internet/fact-sheet/mobile' target='_blank' rel='noreferrer' className='link'>Mobile Fact Sheet</a></p>
        </div>
    </>
)