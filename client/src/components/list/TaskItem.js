import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../scripts/firebase.js';

export default function TaskItem (props) {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    let handle_update = () => {
        navigate(`/update/${props.category_id}/${props._id}`)
    }

    let handle_delete = async () => {
        await fetch(`/api/delete/tasks/${user ? user.uid : 'public'}/${props._id}`,
        {
            method: "DELETE"
        })
        .catch(err => console.log(err));
    }

    let handle_view = () => {
        navigate(`/detail/${props.category_id}/${props._id}`)
    }
    
    return(
        <li>
            <div className="task_name">{props.name}</div>
            <button className="task_view_button"onClick={handle_view} >View</button>
            <button className="task_update_button" onClick={handle_update} >Update</button>
            <button className="task_delete_button"onClick={handle_delete} >Delete</button>
        </li>
    );
}