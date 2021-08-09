function addItem(event){

        event.preventDefault();

        let input = this['todoInput'];
        let li = newli(input.value);

        let itemList = document.querySelector('#itemList');
        itemList.appendChild(li);

        input.value = '';
        input.focus();
    }

function newli(inputValue) {
        let li = document.createElement('li');
        li.innerHTML = inputValue;
        li.classList.add('list-group-item') 
        li.addEventListener('click', toggleActive);

        let button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'float-right', 'btn-sm');
        button.innerHTML = 'X';
        button.addEventListener('click', removeItem);

        li.appendChild(button);

        return li;
    }

    function toggleActive(){
        this.classList.toggle('change');
    }

    function removeItem(){
        this.parentElement.remove();
    }

document.querySelector('#inputForm').addEventListener('submit', addItem);