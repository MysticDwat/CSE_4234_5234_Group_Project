import { useState, useEffect } from 'react';

export default function useGetTasks(user_id, [task_id=null, is_name=true] = []) {
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
                    set_tasks(data.message);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        get_tasks();
    },[JSON.stringify(tasks), user_id, task_id, is_name]);

    return tasks;
}