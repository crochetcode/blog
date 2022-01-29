export const Spotify = () => {
    return (
        <div className='flex'>
            <section>
                <p>Each month (roughly) I make a new mixtape with a handful of rules: </p>
                <ul>
                    <li><strong>has to actually reflect what I've been listening to </strong>(no matter how embarassing or rough around the edges)</li>
                    <li><strong>can't be longer than 80 minutes</strong> (the max recording length for an old school Memorex cd)</li>
                </ul>
            </section>
            <iframe src="https://open.spotify.com/embed/playlist/4g1Ur7fLHfPtAgmkfa6r6z?utm_source=generator&theme=0"
                width="100%" height="380" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="spotify">
            </iframe>
        </div>
    )
}