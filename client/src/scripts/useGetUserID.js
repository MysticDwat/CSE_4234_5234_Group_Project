import { useState, useEffect } from 'react';

export default function useGetUserID(firebase_uid) {
    const [user_id, set_user_id] = useState([]);

    useEffect(() => {
        let get_user_id = async () => {
            if(!firebase_uid) { set_user_id(null); return; }
            await fetch(`/api/get/users/${firebase_uid}`,
                {
                    method: "GET"
                })
                .then(async (res) => {
                    let data = await res.json();
                    set_user_id(data.message);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        get_user_id();
    },[user_id, firebase_uid]);

    return user_id;
}