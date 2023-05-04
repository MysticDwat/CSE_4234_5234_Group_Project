import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrashCan, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../scripts/firebase.js';

export default function TaskItem (props) {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    let handle_update = () => {
        navigate(`/update/${props._id}`)
    }

    let handle_delete = async () => {
        await fetch(`/api/delete/tasks/${user ? user.uid : 'public'}/${props._id}`,
        {
            method: "DELETE"
        })
        .then(() => props.toggle_refresh())
        .catch(err => console.log(err));
    }

    let handle_view = () => {
        navigate(`/detail/${props._id}`)
    }
    
    return(
        <li>
            <FontAwesomeIcon icon={faChevronRight} />
            <div className="task-name">{props.name}</div>
            <button className="task-view-button"onClick={handle_view} ><FontAwesomeIcon icon={faEye} /> View</button>
            {user ? <button className="task-update-button" onClick={handle_update} ><FontAwesomeIcon icon={faPen} /> Update</button> : null}
            {user ? <button className="task-delete-button"onClick={handle_delete} ><FontAwesomeIcon icon={faTrashCan} /> Delete</button> : null}
        </li>
    );
}