import { useState } from 'react'
import { Link } from 'react-router-dom';

import '../styling/nav_button.css';

export default function NavButton(props) {
    const [is_active, set_is_active] = useState(false);


    return(
        <Link 
            to={props.link}
            onMouseEnter={
                () => {
                    set_is_active(true);
                    props.set_is_active(true);
                }
            }
            onMouseLeave={
                () => {
                    set_is_active(false);
                    props.set_is_active(false);
                }
            }
            className={
                'nav_button ' + (is_active ? 'highlight' : props.is_active ? 'fade' : '')
            }
        >
            {props.name}
        </Link>
    );
}