const addTask = () => {
    let nametask = document.getElementById('addtask').value;

    let newtask = document.createElement('h4');
    if (nametask != "" && nametask.length < 20) {
    newtask.className = 'task';
    newtask.textContent = nametask;
    
    let divtask = document.createElement('div');
    divtask.className = 'divtask';
    let divname = document.createElement('div');
    divname.className = "left";
    let divimg = document.createElement('div');
    divimg.className = "right";
    
    let img1 = document.createElement('img');
    img1.src = "garbage.png";
    img1.id = "imggarbage";
    img1.style = "height: 60px; cursor: pointer"
    img1.onclick = delTask;
    let img2 = document.createElement('img');
    img2.src = "check.png";
    img2.id = "imgcheck";
    img2.style = "height: 30px; cursor: pointer"
    img2.onclick = doneTask;
    divtask.appendChild(divname);
    divtask.appendChild(divimg);
    divname.appendChild(newtask);
    divimg.appendChild(img2);
    divimg.appendChild(img1);
    setTimeout(() => {
        document.getElementById('addtask').value = "";    
    }, 50);
    document.getElementById('tasklist').appendChild(divtask);
    }

    if (nametask == "") {
        setTimeout(() => {
            document.getElementById('addtask').value = "";    
        }, 50);

        alert("Sua tarefa não pode ser vazia!");
    }

    if (nametask.length > 20) {
        setTimeout(() => {
            document.getElementById('addtask').value = "";    
        }, 50);

        alert("Sua tarefa precisa ter menos que 20 caracteres!");
    }
};

const delTask = (event) => {
    const thisimg = event.target;
    const divimg = thisimg.parentElement;
    const divtask = divimg.parentElement;
    divtask.remove();
};

const doneTask = (event) => {
    const thistask = event.target;
    const divimg = thistask.parentElement;
    const divtask = divimg.parentElement;
    const tasktext = divtask.querySelector('h4');
    if (tasktext.style.textDecoration == "line-through") {
        tasktext.style.textDecoration = "none";
    } else {
        tasktext.style.textDecoration = "line-through";
    }
};