let buttons = document.querySelectorAll('.task_update_button,.task_delete_button');


for (let button of buttons) {
    button.onclick = () => {
        location.href = 'detail.html';
    };
}

buttons = document.querySelectorAll('.task_add_button');

for (let button of buttons) {

    // setting up ID for upcoming task
    let taskCounter = 1;
    let taskID = taskCounter + taskCounter.charCodeAt(index);
    
    // setting up task name
    let taskName;
    
    // setting up task topic
    let taskTopic;
    
    // setting up categoryID
    let categoryID;
    
    // setting up date and time
    let dateTime;
    
    // setting up task status
    let taskStatus;
    
    button.onclick = () => {
        let buttonProperties = {
            id: taskID,
            name: taskName,
            topic: taskTopic,
            category: categoryID,
            when: dateTime,
            status: taskStatus,
        }
        location.href = 'list.html';
    };
    
    // incrementing number and/or letter for ID
    if (taskCounter % 26 = 1) {
    }
    taskCounter++;
}

let button = document.querySelector('.submit_button_placeholder');
if (button) {
    button.onclick = () => {
    
        location.href = 'list.html';
    };
}
