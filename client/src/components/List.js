import '../styling/css/folder.css';

export default function List(){
    return(
        <div>
            <main>
                <div className="folder" data-active="tab-1">
                    <div className="tabs">
                        <div className="tab-option" id="tab-1">Urgent</div>
                        <div className="tab-option" id="tab-2">Important</div>
                        <div className="tab-option" id="tab-3">Monthly</div>
                        <div className="tab-option" id="tab-4">Weekly</div>
                        <div className="tab-option" id="tab-5">Daily</div>
                    </div>

                    <div className="content">
                        <div className="tab-content" id="content-1">
                            <h3>Urgent Tasks</h3>

                            <ul>
                                <li>
                                    <div className="task_name">Make Doctor's Appointment</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>

                                <li>
                                    <div className="task_name">Refill Prescription</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>

                                <li>
                                    <div className="task_name">Respond to Interview Email</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content" id="content-2">
                            <h3>Important Tasks</h3>

                            <ul>
                                <li>
                                    <div className="task_name">Book Hotel for Vacation</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>

                                <li>
                                    <div className="task_name">Call Parents</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>

                                <li>
                                    <div className="task_name">Complete Project Milestone 1</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content" id="content-3">
                            <h3>Monthly Tasks</h3>
                    
                            <ul>
                                <li>
                                    <div className="task_name">Pay Rent</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div className="task_name">Pay Utilities</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div className="task_name">Buy Pads</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content" id="content-4">
                            <h3>Weekly Tasks</h3>

                            <ul>
                                <li>
                                    <div className="task_name">Grocery Shopping</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div className="task_name">D2 Raids</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div className="task_name">House Cleaning</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content" id="content-5">
                            <h3>Daily Tasks</h3>

                            <ul>
                                <li>
                                    <div className="task_name">Take Medication</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div className="task_name">Drink Water</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div className="task_name">Go to the Gym</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                
                                <li>
                                    <div className="task_name">Complete Math Homework.</div>
                                    <button className="task_update_button">Update</button>
                                    <button className="task_delete_button">Delete</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}