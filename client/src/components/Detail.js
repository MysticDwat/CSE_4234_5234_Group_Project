import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../scripts/firebase';

import TaskDetailed from "./TaskDetailed";
import useGetTasks from "../scripts/useGetTasks";

export default function Detail(){
    const { task_id } = useParams();
    const user = useContext(UserContext);
    const tasks = useGetTasks(user !== null ? user.uid : 'public', [task_id, false]);
    
    return(
        <main>
            <TaskDetailed name={tasks.name} description={tasks.description} category={tasks.category} deadline={tasks.due_date} status={tasks.status}/>
        </main>
    );
}