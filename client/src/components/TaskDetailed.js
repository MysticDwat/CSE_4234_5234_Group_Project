import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import '../styling/css/task_detailed.css';

export default function TaskDetailed(props) {
    const navigate = useNavigate();

    return(
        <div className='task-detailed'>
            <div className='tab'>{props.category} Task: {props.name}</div>

            <div className='content'>
                <div className="task-description">
                    Fill up on prescription at Publix Pharmacy for Adderall. 
                </div>

                <div className='minimized-info'>
                    <div><FontAwesomeIcon icon={faCalendarDay} /> {props.deadline}</div>
                    <div><FontAwesomeIcon icon={faCheck} /> {props.status}</div>
                </div>
                <button className="task-add-button" onClick={(e) => navigate('/list')} >Add to Task List</button>
            </div>
        </div>
    );
}