import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../scripts/firebase';
import useGetTasks from '../../scripts/useGetTasks';
import useGetCategories from '../../scripts/useGetCategories';

import '../../styling/list/css/folder.css';
import Tab from './Tab';
import Page from './Page';

export default function List(){
    const [active_id, set_active_id] = useState(0);
    const [refresh, set_refresh] = useState(false);
    const [search_name, set_search_name] = useState('');

    const user = useContext(UserContext);
    const tasks = useGetTasks(user !== null ? user.uid : 'public',[null, true, refresh]);
    const categories = useGetCategories(user !== null ? user.uid : 'public');

    let toggle_refresh = () => {
        set_refresh(!refresh);
    }

    let filter_tabs = () => {
        let new_category_tasks = {};

        for (let x of categories) {
            new_category_tasks[x._id] = tasks.filter(y => y.category_id === x._id && (search_name === '' || y.name.includes(search_name)));
        }

        new_category_tasks = Object.fromEntries(Object.entries(new_category_tasks).filter(x => x[1].length > 0));
        
        return categories.filter(x => search_name === '' || Object.keys(new_category_tasks).includes(x._id))
                .map((x,i) => <Tab id={`tab-${i}`} name={x.name} set_active_id={set_active_id} tab_key={i} key={x.name} />);
    }

    return(
        <main>
            {tasks.length ? 
                <div className="folder">
                    <div className='search-bar'>
                        <input type='text' placeholder='Search...' value={search_name} onChange={(e) => set_search_name(e.target.value)} />
                    </div>

                    <div className="tabs">
                        {filter_tabs()}
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
                                    tasks={tasks.filter(y => y.category_id === x._id && (search_name === '' || y.name.includes(search_name)))}
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