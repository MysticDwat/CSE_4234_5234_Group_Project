import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../scripts/firebase';
import useGetCategories from '../scripts/useGetCategories';

import '../styling/css/create.css';

export default function Create() {
    const [name, set_name] = useState('');
    const [category, set_category] = useState('new category');
    const [new_category, set_new_category] = useState('');
    const [due_date, set_due_date] = useState('');
    const [status, set_status] = useState('');
    const [description, set_description] = useState('');

    const navigate = useNavigate();
    const user = useContext(UserContext);
    const categories = useGetCategories(user !== null ? user.uid : 'public');

    let handle_submit = async () => {
        let category_id = category;

        if (category_id === 'new category') {
            await fetch('/api/create/categories',
            {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(
                {
                    name: new_category,
                    user_id: user ? user.uid : null
                })
            })
            .then(async (res) => {
                let data = await res.json();
                category_id = data.message._id;
            })
            .catch(err => console.log(err));
        }

        await fetch("/api/create/tasks",
        {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(
            {
                name: name,
                user_id: user ? user.uid : null,
                category_id: category_id,
                due_date: due_date,
                status: status,
                description: description
            })
        })
        .catch(err => console.log(err));
    }

    return(
        <main>
            <form id="create-new-task-form" onSubmit={(e) => e.preventDefault()}>
                <ul>
                    <li>
                        <label htmlFor="task-name-input">Name</label>

                        <input 
                            type="text" 
                            name="task-name" 
                            id="task-name-input"
                            value={name}
                            onChange={(e) => set_name(e.target.value)} 
                        />
                    </li>

                    <li>
                        <label htmlFor="task-category-select">Category</label>

                        <select 
                            name="task-category" 
                            id="task-category-select" 
                            value={category} 
                            onChange={(e) => set_category(e.target.value)}
                        >
                            <option value="new category">New Category</option>
                            {
                                categories.map(x => <option value={x._id} key={x._id}>{x.name}</option>)
                            }
                        </select>

                        {
                            category === 'new category' ? 
                            <input 
                                type='text'
                                value={new_category}
                                onChange={(e) => set_new_category(e.target.value)} 
                            /> : null
                        }
                    </li>

                    <li>
                        <label htmlFor={'task-due-date-input'}>Due Date</label>

                        <input 
                            type="datetime-local" 
                            name="task-due-date" 
                            id="task-due-date-input"
                            value={due_date}
                            onChange={(e) => set_due_date(e.target.value)} 
                        />
                    </li>

                    <li>
                        <label htmlFor='task-status-select'>Status</label>

                        <select 
                            name="task-status" 
                            id="task-status-select"
                            value={status}
                            onChange={(e) => set_status(e.target.value)}
                        >
                            <option value="incomplete">Incomplete</option>
                            <option value="pending">Pending</option>
                            <option value="overdue">overdue</option>
                            <option value="done">Done</option>
                        </select>
                    </li>

                    <li>
                        <label htmlFor='task-description-input'>Description</label> <br />

                        <textarea 
                            name="task-description" 
                            id="task-description-input" 
                            rows="10" 
                            cols="50"
                            value={description}
                            onChange={(e) => set_description(e.target.value)}
                        />
                    </li>

                    <li className='form-buttons'>
                        <input type="submit" value='Create Task' onClick={handle_submit} />
                        <input type="reset" value="Clear Task" />
                    </li>
                </ul>
            </form>
        </main>
    );
}