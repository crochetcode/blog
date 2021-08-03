const commits = 3;

const smallGreenBoxes = Array(commits).fill(1).map((_, i) => {
    return (
        <div className='small-box'>{i + 1}</div>
    )
})

const smallGrayBoxes = Array(31 - commits).fill(1).map((_, i) => {
    return (
        <div className='small-box gray'>{i + commits + 1}</div>
    )
})

export const slides = [
    {
        body: (
            <>
                <h1>Initiatives</h1>
                <h2>Work: get a promotion</h2>
                <h2>Gym: change body composition</h2>
                <h2>Coding: make useful apps</h2>
                <h2>Budget: pay off mortgage, build retirement</h2>
            </>
        )
    },
    {
        body: (
            <>
                <h1>Habits</h1>

                <h2>GitHub commit every day</h2>
                <div className='container box-container'>
                    {smallGreenBoxes}
                    {smallGrayBoxes}
                </div>
                <h2>go to gym twice a week</h2>
                <div className='container'>
                    <div className='big-box gray yellow'>1</div>
                    <div className='big-box gray'>0</div>
                    <div className='big-box gray'>0</div>
                    <div className='big-box gray'>0</div>
                </div>
                <h2>social outing each weekend?</h2>
                <div className='container'>
                    <div className='big-box gray'>?</div>
                    <div className='big-box yellow'>~</div>
                    <div className='big-box gray'>?</div>
                    <div className='big-box gray'>?</div>
                </div>
            </>
        )
    }
]