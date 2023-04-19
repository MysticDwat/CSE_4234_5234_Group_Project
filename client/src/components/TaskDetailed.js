import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCheck } from '@fortawesome/free-solid-svg-icons';

import '../styling/css/task_detailed.css';

export default function TaskDetailed(props) {
    return(
        <div className='task-detailed'>
            <div className='tab'>{props.category} Task: {props.name}</div>

            <div className='content'>
                <div className="task-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat eros,
                    interdum vitae consequat ac, egestas eu ipsum. Phasellus in ipsum vitae
                    lacus auctor congue. Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Curabitur ac aliquam mauris, at vestibulum orci. Aenean vitae finibus 
                    lorem. Aliquam vel est magna. Vestibulum ante ipsum primis in faucibus orci 
                    luctus et ultrices posuere cubilia curae; Donec non leo nec eros placerat 
                    bibendum. Mauris erat lorem, maximus a eros at, lobortis semper tortor. Ut 
                    ac augue vel risus volutpat pellentesque. Quisque eleifend condimentum tellus, 
                    ut laoreet mi porttitor vitae. Mauris non rhoncus velit. 
                </div>

                <div className='minimized-info'>
                    <div><FontAwesomeIcon icon={faCalendarDay} /> {props.deadline}</div>
                    <div><FontAwesomeIcon icon={faCheck} /> {props.status}</div>
                </div>
                <button className="task-add-button">Add to Task List</button>
            </div>
        </div>
    );
}