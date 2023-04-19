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
    let task name
    
    button.onclick = () => {
        button.setProperty(id,taskID);
        button.setName(name,taskName);
        button task list 
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
