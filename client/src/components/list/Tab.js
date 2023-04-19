export default function Tab(props) {
    return(
        <div className='tab-option' id={props.id} onClick={() => props.set_active_id(props.tab_key)}>{props.name}</div>
    );
}