import { useNavigate } from "react-router-dom";

export default function PageJS(props) {
    const navigate = useNavigate();

    return(
        <div className={'tab-content ' + (props.active === props.content_key ? 'show' : 'hide')} id={props.id}>
            <h3>{props.category} Tasks</h3>

            <ul>
                {
                    props.tasks.map((x) => 
                        <li key ={x._id}>
                            <div className="task_name">{x.name}</div>
                            <button className="task_update_button" onClick={(e) => navigate(`/detail/${x.category_id}/${x._id}`)} >Update</button>
                            <button className="task_delete_button"onClick={(e) => navigate(`/detail/${x.category_id}/${x._id}`)} >Delete</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}