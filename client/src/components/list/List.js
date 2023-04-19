import { useState } from 'react';

import '../../styling/list/css/folder.css';
import Tab from './Tab';
import Page from './Page';

export default function List(){
    const [active_id, set_active_id] = useState(0);

    return(
        <main>
            <div className="folder">
                <div className="tabs">
                    <Tab id={'tab-0'} name={'Urgent'} set_active_id={set_active_id} tab_key={0} />
                    <Tab id={'tab-1'} name={'Important'} set_active_id={set_active_id} tab_key={1} />
                    <Tab id={'tab-2'} name={'Monthly'} set_active_id={set_active_id} tab_key={2} />
                    <Tab id={'tab-3'} name={'Weekly'} set_active_id={set_active_id} tab_key={3} />
                    <Tab id={'tab-4'} name={'Daily'} set_active_id={set_active_id} tab_key={4} />
                </div>

                <div className="content">
                    <Page category={'Urgent'} active={active_id} id={'content-0'} content_key={0} />
                    <Page category={'Important'} active={active_id} id={'content-1'} content_key={1} />
                    <Page category={'Monthly'} active={active_id} id={'content-2'} content_key={2} />
                    <Page category={'Weekly'} active={active_id} id={'content-3'} content_key={3} />
                    <Page category={'Daily'} active={active_id} id={'content-4'} content_key={4} />

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
    );
}