import TaskItem from "./TaskItem";

export default function PageJS(props) {
    return(
        <div className={'tab-content ' + (props.active === props.content_key ? 'show' : 'hide')} id={props.id}>
            <h3>{props.category} Tasks</h3>

            <ul className='content-list'>
                {
                    props.tasks.map((x) => 
                        <TaskItem _id={x._id} name={x.name} category_id={x.category_id} key={x._id} toggle_refresh={props.toggle_refresh} />
                    )
                }
            </ul>
        </div>
    );
}