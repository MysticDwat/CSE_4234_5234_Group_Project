import { useRef, useEffect } from 'react';

import '../../styling/header/css/header.css';
import useScrollDirection from '../../scripts/useScrollDirection';
import NavMenu from './NavMenu';

export default function Header() {
    const header = useRef(null);
    const title = useRef(null);
    const scroll_direction = useScrollDirection();
    
    useEffect(() => {
        const header_height = `calc(1em + ${getComputedStyle(header.current).height}`;
        document.body.style.setProperty('margin-top',header_height);

        const title_style = getComputedStyle(title.current);
        const title_height = `calc(-${title_style.height} -  ${title_style.paddingTop} - ${title_style.paddingBottom})`;
        header.current.style.setProperty('transform',`translateY(${scroll_direction === 'down' ? title_height : '0'})`);
    },[scroll_direction]);

    return(
        <header ref={header}>
            <h1 ref={title}>The Task List</h1>

            <div id="navigation">
                <NavMenu
                    id='page-nav' 
                    buttons={
                        [
                            ['/','Home'],
                            ['/list','Task List'],
                            ['/create','Create Task'],
                            ['/about','About']
                        ]
                    } 
                />

                <NavMenu 
                    id='user-nav'
                    buttons={
                        [
                            ['/login','Login'],
                            ['/register','Sign Up'],
                            ['/settings','Settings']
                        ]
                    } 
                />
            </div>
        </header>
    );
}