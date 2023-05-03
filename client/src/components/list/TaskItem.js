import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
            <div className="task_name">{props.name}</div>
            <button className="task_view_button"onClick={handle_view} >View</button>
            {user ? <button className="task_update_button" onClick={handle_update} >Update</button> : null}
            {user ? <button className="task_delete_button"onClick={handle_delete} >Delete</button> : null}
        </li>
    );
}