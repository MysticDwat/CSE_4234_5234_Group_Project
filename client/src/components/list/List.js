import { useState, useContext } from 'react';
import { UserIDContext } from '../../scripts/firebase';
import useGetTasks from '../../scripts/useGetTasks';
import useGetCategories from '../../scripts/useGetCategories';

import '../../styling/list/css/folder.css';
import Tab from './Tab';
import Page from './Page';

export default function List(){
    const [active_id, set_active_id] = useState(0);
    const user_id = useContext(UserIDContext);
    const tasks = useGetTasks(user_id !== null ? user_id : 'public');
    const categories = useGetCategories(user_id !== null ? user_id : 'public');

    return(
        <main>
            <div className="folder">
                <div className="tabs">
                    {categories.map((x,i) => <Tab id={`tab-${i}`} name={x.name} set_active_id={set_active_id} tab_key={i} key={x.name} />)}
                </div>

                <div className="content">
                    {
                        categories.map((x,i) => 
                            <Page 
                                id={`content-${i}`} 
                                category={x.name} 
                                active={active_id} 
                                content_key={i} 
                                key={x.name}
                                tasks={tasks.filter(y => y.category_id === x._id)} 
                            />
                        )
                    }
                </div>
            </div>
        </main>
    );
}