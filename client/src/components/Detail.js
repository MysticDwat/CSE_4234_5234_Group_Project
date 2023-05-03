import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../scripts/firebase';

import TaskDetailed from "./TaskDetailed";
import useGetTasks from "../scripts/useGetTasks";

export default function Detail(){
    const { task_id } = useParams();
    const user = useContext(UserContext);
    const tasks = useGetTasks(user !== null ? user.uid : 'public', [task_id, false]);
    
    let format_date = () => {
        if(!tasks.due_date){return '';}
        let date = new Date(tasks.due_date);
        date = (new Date(date.getTime() - date.getTimezoneOffset() * 60000).toUTCString()).slice(0, -4);
        return date;
    }

    return(
        <main>
            <TaskDetailed name={tasks.name} description={tasks.description} category={tasks.category} deadline={format_date()} status={tasks.status}/>
        </main>
    );
}