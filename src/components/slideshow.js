import { useState } from 'react';
import {slides} from '../constants/slides';

export const Slideshow = () => {
    const [panelIndex, changePanel] = useState(0);

    const changePanelIndex = direction => {
        let newIndex;

        if (direction === 'left') {
            newIndex = panelIndex - 1
            if (newIndex >= 0) {
                changePanel(newIndex)
            } else changePanel(slides.length - 1)

        }

        if (direction === 'right') {
            newIndex = panelIndex + 1
            if (newIndex <= slides.length - 1) {
                changePanel(newIndex)
            } else changePanel(0)
        }
    }

    return (
        <div className='slideshow-container'>
            <div className='arrow arrow-left' onClick={() => changePanelIndex('left')}>{'<-'}</div>
            <div className='slideshow-frame'>
                {slides[panelIndex].body}
            </div>
            <div className='arrow arrow-right' onClick={() => changePanelIndex('right')}>{'->'}</div>
        </div>
    )
}