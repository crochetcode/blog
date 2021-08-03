const commits = 2;

const smallGreenBoxes = Array(commits).fill(1).map(box => {
    return (
        <div className='small-box'></div>
    )
})

const smallGrayBoxes = Array(31 - commits).fill(1).map(box => {
    return (
        <div className='small-box gray'></div>
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
                <h2>Budget: track expenses</h2>
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
                    <div className='big-box gray'>0</div>
                    <div className='big-box gray'></div>
                    <div className='big-box gray'></div>
                    <div className='big-box gray'></div>
                </div>
                <h2>social outing each weekend?</h2>
                <div className='container'>
                    <div className='big-box gray'>?</div>
                    <div className='big-box gray'>~</div>
                    <div className='big-box gray'>~</div>
                    <div className='big-box gray'></div>
                </div>
            </>
        )
    }
]