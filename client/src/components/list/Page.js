export default function PageJS(props) {
    return(
        <div className={'tab-content ' + (props.active === props.content_key ? 'show' : 'hide')} id={props.id}>
            <h3>{props.category} Tasks</h3>

            <ul>
                <li>
                    <div className="task_name">Make Doctor's Appointment</div>
                    <button className="task_update_button">Update</button>
                    <button className="task_delete_button">Delete</button>
                </li>

                <li>
                    <div className="task_name">Refill Prescription</div>
                    <button className="task_update_button">Update</button>
                    <button className="task_delete_button">Delete</button>
                </li>

                <li>
                    <div className="task_name">Respond to Interview Email</div>
                    <button className="task_update_button">Update</button>
                    <button className="task_delete_button">Delete</button>
                </li>
            </ul>
        </div>
    );
}