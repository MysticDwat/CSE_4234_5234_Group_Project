let buttons = document.querySelectorAll('.task_update_button,.task_delete_button');


for (let button of buttons) {
    button.onclick = () => {
        location.href = 'detail.html';
    };
}

buttons = document.querySelectorAll('.task_add_button');

for (let button of buttons) {
    button.onclick = () => {
        location.href = 'list.html';
    };
}

let button = document.querySelector('.submit_button_placeholder');
if (button) {
    button.onclick = () => {
    
        location.href = 'list.html';
    };
}