import { useState } from 'react';

import '../../styling/header/css/menu.css';
import NavButton from './NavButton';

export default function NavMenu(props) {
    const [is_active, set_is_active] = useState(false);
    
    const nav_button_list = props.buttons.map(
        button => <NavButton is_active={is_active} set_is_active={set_is_active} link={button[0]} name={button[1]} key={button[1]} />
    );

    return(
        <nav className="menu">
            {nav_button_list}
        </nav>
    );

}