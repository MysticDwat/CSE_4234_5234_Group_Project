import { useState, useEffect } from 'react';

export default function useGetCategories(user_id) {
    const [categories, set_categories] = useState([]);

    useEffect(() => {
        let get_tasks = async () => {
            await fetch(`/api/get/categories/${user_id}`,{method: "GET"})
                .then(async (res) => {
                    let data = await res.json();
                    set_categories(data.message);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        get_tasks();
    },[JSON.stringify(categories), user_id]);

    return categories;
}