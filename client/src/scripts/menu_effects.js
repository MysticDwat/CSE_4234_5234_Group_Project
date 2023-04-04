let options = document.querySelectorAll('.menu li');

for (let option of options) {
    option.onmouseover = () => {
        let siblings = option.parentElement.children;
        for (let sibling of siblings) {
            sibling.classList.add('fade');
        }

        option.classList.remove('fade');
    };

    option.onmouseout = () => {
        let siblings = option.parentElement.children;
        for (let sibling of siblings) {
            sibling.classList.remove('fade');
        }
    };
}