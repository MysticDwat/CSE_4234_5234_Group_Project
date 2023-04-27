import { useState, useEffect } from 'react';
import Tasks from  '../tasks.json';

export default function useGetTasks(task_id) {
    const [tasks, set_tasks] = useState(Tasks);

    useEffect(() => {
        let task_list = task_id === undefined ? Tasks : Tasks[task_id];

        set_tasks(task_list);
    },[JSON.stringify(tasks), task_id]);

    return tasks;
}