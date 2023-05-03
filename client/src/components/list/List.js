import { useState, useContext } from 'react';
import { UserContext } from '../../scripts/firebase';
import useGetTasks from '../../scripts/useGetTasks';
import useGetCategories from '../../scripts/useGetCategories';

import '../../styling/list/css/folder.css';
import Tab from './Tab';
import Page from './Page';

export default function List(){
    const [active_id, set_active_id] = useState(0);
    const [refresh, set_refresh] = useState(false);
    const user = useContext(UserContext);
    const tasks = useGetTasks(user !== null ? user.uid : 'public',[null, true, refresh]);
    const categories = useGetCategories(user !== null ? user.uid : 'public');

    let toggle_refresh = () => {
        set_refresh(!refresh);
    }

    return(
        <main>
            {tasks.length ? 
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
                                    toggle_refresh={toggle_refresh}
                                />
                            )
                        }
                    </div>
                </div> 
                :
                <div className='no-tasks'>
                    <h1>No Tasks</h1>
                    <p>Please create tasks through the Create Task Page.</p>
                </div>
            }
        </main>
    );
}