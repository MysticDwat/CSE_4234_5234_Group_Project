import TaskDetailed from "./TaskDetailed";

export default function Detail(){
    return(
        <main>
            <TaskDetailed name={'Refill Prescription'} category={'Urgent'} deadline={'4/20/23 3:00pm'} status={'Incomplete'}/>
        </main>
    );
}