import { useParams } from "react-router-dom";

import TaskDetailed from "./TaskDetailed";
import useGetTasks from "../scripts/useGetTasks";

export default function Detail(){
    const { task_id } = useParams();
    const tasks = useGetTasks(task_id);
    
    return(
        <main>
            <TaskDetailed name={tasks.name} description={tasks.description} category={tasks.category} deadline={tasks.due_date} status={tasks.status}/>
        </main>
    );
}