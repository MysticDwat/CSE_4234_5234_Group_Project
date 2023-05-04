import { useState } from 'react';

export default function Tab(props) {
    const [is_active, set_is_active] = useState(false);

    return(
        <div 
            className={'tab-option ' + (is_active ? 'highlight' : props.is_active ? 'fade' : '')} 
            id={props.id} onClick={() => props.set_active_id(props.tab_key)}
            onMouseEnter={() => {
                set_is_active(true);
                props.set_is_active(true);
            }}
            onMouseLeave={() => {
                set_is_active(false);
                props.set_is_active(false);
            }}
        >
            {props.name}
        </div>
    );
}