export default function Detail(){
    return(
        <div className="detail">
            <main>
                <div class="task_detailed">
                    <ul>
                        <li class="task_name">
                            Task Name
                        </li>

                        <li class="task_category">
                            Category
                        </li>

                        <li class="task_due_date">
                            Due Date
                        </li>

                        <li class="task_status">
                            Status
                        </li>

                        <li class="task_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat eros,
                            interdum vitae consequat ac, egestas eu ipsum. Phasellus in ipsum vitae
                            lacus auctor congue. Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Curabitur ac aliquam mauris, at vestibulum orci. Aenean vitae finibus 
                            lorem. Aliquam vel est magna. Vestibulum ante ipsum primis in faucibus orci 
                            luctus et ultrices posuere cubilia curae; Donec non leo nec eros placerat 
                            bibendum. Mauris erat lorem, maximus a eros at, lobortis semper tortor. Ut 
                            ac augue vel risus volutpat pellentesque. Quisque eleifend condimentum tellus, 
                            ut laoreet mi porttitor vitae. Mauris non rhoncus velit. 
                        </li>

                        <li>
                            <button class="task_add_button">Add to Task List</button>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}