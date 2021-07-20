const tasks = [
    'Wells Fargo',
    'Calendar',
    'Keep'
]

const taskDisplay = tasks.map(task => {
    return (
        <li>
            <input type='checkbox' />
            <p>{task}</p>
        </li>
    )
})

export const Pulse = () => {
    return (
        <div className='panel'>
            <h2>Pulse</h2>
            <ul>
                {taskDisplay}
            </ul>
        </div>
    )
}