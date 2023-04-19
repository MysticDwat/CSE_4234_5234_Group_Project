import { useNavigate} from 'react-router-dom';

import '../styling/css/create.css';

export default function Create() {
    const navigate = useNavigate();

    return(
        <main>
            <form id="create-new-task-form" onSubmit={(e) => e.preventDefault()}>
                <ul>
                    <li>
                        <label htmlFor="task-name-input">Name</label>
                        <input type="text" name="task-name" id="task-name-input" />
                    </li>

                    <li>
                        <label htmlFor="task-category-select">Category</label>
                        <select name="task-category" id="task-category-select">
                            <option value="urgent">Urgent</option>
                            <option value="important">Important</option>
                            <option value="monthly">Monthly</option>
                            <option value="weekly">Weekly</option>
                            <option value="daily">Daily</option>
                        </select>
                    </li>

                    <li>
                        <label htmlFor={'task-due-date-input'}>Due Date</label>
                        <input type="datetime-local" name="task-due-date" id="task-due-date-input" />
                    </li>

                    <li>
                        <label htmlFor='task-status-select'>Status</label>
                        <select name="task-status" id="task-status-select">
                            <option value="incomplete">Incomplete</option>
                            <option value="pending">Pending</option>
                            <option value="overdue">overdue</option>
                            <option value="done">Done</option>
                        </select>
                    </li>

                    <li>
                        <label htmlFor='task-description-input'>Description</label> <br />
                        <textarea name="task-description" id="task-description-input" rows="10" cols="50"></textarea>
                    </li>

                    <li className='form-buttons'>
                        <input type="submit" value='Create Task' onClick={(e) => navigate('/list')} />
                        <input type="reset" value="Clear Task" />
                    </li>
                </ul>
            </form>
        </main>
    );
}