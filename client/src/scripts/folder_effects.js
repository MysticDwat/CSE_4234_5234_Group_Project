let folder = document.querySelector('.folder');

let tabs = document.querySelectorAll('.tab-option');

let content = document.querySelectorAll('.tab-content');

function update_active_tab () {
  for(let tab of tabs){
    tab.classList.remove('highlight');
  }
  
  for(let tab_content of content){
    tab_content.classList.remove('show');
  }
  
  let active_id = folder.dataset.active;
  
  let active_tab = document.querySelector(`#${active_id}`)
  active_tab.classList.add('highlight');
  
  let active_content = document.querySelector(`#content-${active_id.charAt(active_id.length - 1)}`);
  active_content.classList.add('show');
}

update_active_tab();

for(let tab of tabs){
  tab.onclick = () => {
    folder.dataset.active = tab.id;
    update_active_tab();
  }
}