import { useRef, useEffect } from 'react';

import '../../styling/header/css/header.css';
import NavMenu from './NavMenu';

export default function Header() {
    const header = useRef(null);
    
    useEffect(() => {
        const header_height = getComputedStyle(header.current).height;
        console.log(header_height);
        document.body.style.setProperty('margin-top',header_height);
    },[header]);

    return(
        <header ref={header}>
            <h1>The Task List</h1>

            <div className="navigation">
                <NavMenu 
                    buttons={
                        [
                            ['/login','Login'],
                            ['/register','Sign Up'],
                            ['/settings','Settings']
                        ]
                    } 
                />

                <NavMenu 
                    buttons={
                        [
                            ['/','Home'],
                            ['/list','Task List'],
                            ['/create','Create Task'],
                            ['/about','About'],
                            ['/detail','Task Detail (TEMP)']
                        ]
                    } 
                />
            </div>
        </header>
    );
}