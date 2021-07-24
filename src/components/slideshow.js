import {useState} from 'react';

export const Slideshow = () => {
    const [panelIndex, changePanel] = useState(0);
    console.log(panelIndex)
    
    const changePanelIndex = direction => {
        let newIndex;

        if (direction === 'left'){
            newIndex = panelIndex - 1
            if(newIndex >= 0)
            changePanel(newIndex)
        }
    
        if (direction === 'right'){
            newIndex = panelIndex + 1
            if(newIndex <= panels.length - 1)
            changePanel(newIndex)
        }
    }
    
    const panels = [
        {
            heading: (<h2>slideshow</h2>),
            body: (<p>add arrows, panels</p>)
        },
        {
            heading: (<h2>slideshow 2</h2>),
            body: (<p>add arrows, panels</p>)
        },

    ]

    return (
        <div className='slideshow-container'>
            <div className='arrow arrow-left' onClick={() => changePanelIndex('left')}>{'<-'}</div>
            <div className='slideshow-frame'>
                {panels[panelIndex].heading}
                {panels[panelIndex].body}
            </div>
            <div className='arrow arrow-right' onClick={() => changePanelIndex('right')}>{'->'}</div>
        </div>
    )
}