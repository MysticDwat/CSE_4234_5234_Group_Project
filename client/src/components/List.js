export default function List(){
    return(
        <div>
            <main>
                <div class="folder" data-active="tab-1">
                    <div class="tabs">
                        <div class="tab-option" id="tab-1">Urgent</div>
                        <div class="tab-option" id="tab-2">Important</div>
                        <div class="tab-option" id="tab-3">Monthly</div>
                        <div class="tab-option" id="tab-4">Weekly</div>
                        <div class="tab-option" id="tab-5">Daily</div>
                    </div>

                    <div class="content">
                        <div class="tab-content" id="content-1">
                            <h3>Urgent Tasks</h3>

                            <ul>
                                <li>
                                    <div class="task_name">Make Doctor's Appointment</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>

                                <li>
                                    <div class="task_name">Refill Prescription</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>

                                <li>
                                    <div class="task_name">Respond to Interview Email</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                            </ul>
                        </div>

                        <div class="tab-content" id="content-2">
                            <h3>Important Tasks</h3>

                            <ul>
                                <li>
                                    <div class="task_name">Book Hotel for Vacation</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>

                                <li>
                                    <div class="task_name">Call Parents</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>

                                <li>
                                    <div class="task_name">Complete Project Milestone 1</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                            </ul>
                        </div>

                        <div class="tab-content" id="content-3">
                            <h3>Monthly Tasks</h3>
                    
                            <ul>
                                <li>
                                    <div class="task_name">Pay Rent</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div class="task_name">Pay Utilities</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div class="task_name">Buy Pads</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                            </ul>
                        </div>

                        <div class="tab-content" id="content-4">
                            <h3>Weekly Tasks</h3>

                            <ul>
                                <li>
                                    <div class="task_name">Grocery Shopping</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div class="task_name">D2 Raids</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div class="task_name">House Cleaning</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                            </ul>
                        </div>

                        <div class="tab-content" id="content-5">
                            <h3>Daily Tasks</h3>

                            <ul>
                                <li>
                                    <div class="task_name">Take Medication</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div class="task_name">Drink Water</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div class="task_name">Go to the Gym</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div class="task_name">Complete Math Homework.</div>
                                    <button class="task_update_button">Update</button>
                                    <button class="task_delete_button">Delete</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}