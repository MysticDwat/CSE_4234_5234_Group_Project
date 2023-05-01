import { useState, useEffect } from 'react';

export default function useGetCategories(user_id, [category_id=null, is_name=true] = []) {
    const [categories, set_categories] = useState([]);

    useEffect(() => {
        let get_categories = async () => {
            await fetch(category_id !== null ?
                `/api/get/categories/${user_id}/${is_name ? 'name' : '_id'}/${category_id}` :
                `/api/get/categories/${user_id}`,
                {
                    method: "GET"
                })
                .then(async (res) => {
                    let data = await res.json();
                    set_categories(data.message);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        get_categories();
    },[JSON.stringify(categories), user_id, category_id, is_name]);

    return categories;
}