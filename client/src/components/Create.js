export default function Create() {
    return(
        <div className="create">
            <main>
                <form id="create_new_task_form">
                    <ul>
                        <li>
                            <label for="task_name_input">Name</label>
                            <input type="text" name="task_name" id="task_name_input" />
                        </li>

                        <li>
                            <label for="task_category_select">Category</label>
                            <select name="task_category" id="task_category_select">
                                <option value="urgent">Urgent</option>
                                <option value="important">Important</option>
                                <option value="monthly">Monthly</option>
                                <option value="weekly">Weekly</option>
                                <option value="daily">Daily</option>
                            </select>
                        </li>

                        <li>
                            <label>Due Date</label>
                            <input type="datetime-local" name="task_due_date" id="task_due_date_input" />
                        </li>

                        <li>
                            <label>Status</label>
                            <select name="task_status" id="task_status_select">
                                <option value="incomplete">Incomplete</option>
                                <option value="pending">Pending</option>
                                <option value="overdue">overdue</option>
                                <option value="done">Done</option>
                            </select>
                        </li>

                        <li>
                            <label>Description</label>
                            <textarea name="task_description" id="task_description_input" rows="10" cols="50"></textarea>
                        </li>

                        <li>
                            <a class="submit_button_placeholder">Create Task</a>
                            <input type="reset" value="Clear Task" />
                        </li>
                    </ul>
                </form>
            </main>
        </div>
    );
}