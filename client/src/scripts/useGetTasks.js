import { useState, useEffect } from 'react';

export default function useGetTasks(user_id, [task_id=null, is_name=true, toggle_refresh=false] = []) {
    const [tasks, set_tasks] = useState([]);

    useEffect(() => {
        let get_tasks = async () => {
            await fetch(task_id !== null ? 
                `/api/get/tasks/${user_id}/${is_name ? 'name' : '_id'}/${task_id}` : 
                `/api/get/tasks/${user_id}`,
                {
                    method: "GET"
                })
                .then(async (res) => {
                    let data = await res.json();
                    set_tasks(JSON.stringify(data.message));
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        get_tasks();
    },[tasks, user_id, task_id, is_name, toggle_refresh]);

    return tasks.length ? JSON.parse(tasks) : [];
}