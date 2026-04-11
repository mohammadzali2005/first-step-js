let count = 0;

const countEl = document.getElementById('count-el');
countEl.textContent = count;

function increment(){
    count++;
    countEl.textContent = count;
}

const saveEl = document.getElementById('save-el');

function save(){
    if (count != 0)
        saveEl.textContent += count + ' - ';
    else 
        alert('You should increment it to save it');

    count = 0;
    countEl.textContent = count;
}