import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../scripts/firebase';
import useGetTasks from '../../scripts/useGetTasks';
import useGetCategories from '../../scripts/useGetCategories';

import '../../styling/list/css/folder.css';
import Tab from './Tab';
import Page from './Page';

export default function List(){
    const [active_id, set_active_id] = useState(0);
    const [is_active, set_is_active] = useState(false);
    const [refresh, set_refresh] = useState(false);
    const [search_name, set_search_name] = useState('');
    const [tabs, set_tabs] = useState([]);
    const [pages, set_pages] = useState([]);

    const user = useContext(UserContext);
    const tasks = useGetTasks(user !== null ? user.uid : 'public',[null, true, refresh]);
    const categories = useGetCategories(user !== null ? user.uid : 'public');

    useEffect(() => {
        let toggle_refresh = () => {
            set_refresh(!refresh);
        }

        let new_category_tasks = {};

        for (let x of categories) {
            new_category_tasks[x._id] = tasks.filter(y => y.category_id === x._id && (search_name === '' || y.name.includes(search_name)));
        }

        new_category_tasks = Object.fromEntries(Object.entries(new_category_tasks).filter(x => x[1].length > 0));
        
        let filtered_categories = categories.filter(x => search_name === '' || Object.keys(new_category_tasks).includes(x._id));
        
        if (!filtered_categories.filter(x => x._id === active_id).length && filtered_categories.length){
            set_active_id(filtered_categories[0]._id);
        }

        set_tabs(filtered_categories.map(x => 
            <Tab id={`tab-${x._id}`} name={x.name} set_active_id={set_active_id} tab_key={x._id} key={x.name} is_active={is_active} set_is_active={set_is_active} />
        ));
        
        set_pages(filtered_categories.length ? filtered_categories.map(x => 
            <Page 
                id={`content-${x._id}`} 
                category={x.name} 
                active={active_id} 
                content_key={x._id} 
                key={x.name}
                tasks={tasks.filter(y => y.category_id === x._id && (search_name === '' || y.name.includes(search_name)))}
                toggle_refresh={toggle_refresh}
            />) :
            <div className='no-items-found'>No Items Found</div>
        );
    },[JSON.stringify(categories), JSON.stringify(tasks), search_name, active_id, refresh, is_active]);

    return(
        <main>
            {tasks.length ? 
                <div className="folder">
                    <div className='search-bar-container'>
                        <input className='search-bar' type='text' placeholder='Search...' value={search_name} onChange={(e) => set_search_name(e.target.value)} />
                    </div>

                    <div className="tabs">
                        {tabs}
                    </div>

                    <div className="content">
                        {pages}
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