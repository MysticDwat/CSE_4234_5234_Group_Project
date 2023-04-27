import { useState, useEffect } from 'react';
import useGetTasks from '../../scripts/useGetTasks';

import '../../styling/list/css/folder.css';
import Tab from './Tab';
import Page from './Page';

export default function List(){
    const [active_id, set_active_id] = useState(0);
    const [categories, set_categories] = useState([]);
    const tasks = useGetTasks();

    useEffect(() => {
        let categories = {};

        for (let task of tasks){
            let category = task.category;

            if(!(category in categories)){
                categories[category] = 1;
            }
        }

        set_categories(Object.keys(categories));
    },[tasks]);

    return(
        <main>
            <div className="folder">
                <div className="tabs">
                    {categories.map((x,i) => <Tab id={`tab-${i}`} name={x} set_active_id={set_active_id} tab_key={i} key={x} />)}
                </div>

                <div className="content">
                    {
                        categories.map((x,i) => 
                            <Page 
                                id={`content-${i}`} 
                                category={x} 
                                active={active_id} 
                                content_key={i} 
                                key={x}
                                tasks={tasks.filter(y => y.category === x)} 
                            />
                        )
                    }
                </div>
            </div>
        </main>
    );
}