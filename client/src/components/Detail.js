import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserIDContext } from '../scripts/firebase';

import TaskDetailed from "./TaskDetailed";
import useGetTasks from "../scripts/useGetTasks";

export default function Detail(){
    const { task_id } = useParams();
    const user_id = useContext(UserIDContext);
    const tasks = useGetTasks(user_id !== null ? user_id : 'public', [task_id, false]);
    
    return(
        <main>
            <TaskDetailed name={tasks.name} description={tasks.description} category={tasks.category} deadline={tasks.due_date} status={tasks.status}/>
        </main>
    );
}