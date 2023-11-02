document.addEventListener("DOMContentLoaded", function () 
{
    const taskinput = document.getElementById("taskinput");
    const addtaskButton = document.getElementById("addtask");
    const tasklist = document.getElementById("tasklist");
    const complete_task = document.getElementById("complete-task");
    const delete_task = document.getElementById("delete-task");
    const buttons = document.getElementById("buttons");

    // Event listener to add a new task
    addtaskButton.addEventListener("click", function () 
    {
        const tasktext = taskinput.value.trim();
        if (tasktext !== "") 
        {
            const listitem = document.createElement("li");
            const done = document.createElement("button");
            const deleteb = document.createElement("button");
            listitem.innerHTML = `
                <span>${tasktext}</span>
            `;
            tasklist.appendChild(listitem); 
            buttons.appendChild(done);  
            buttons.appendChild(deleteb); 
            listitem.id = "listitem";
            done.innerHTML = "Done";
            done.id = "done-button";
            deleteb.innerHTML="Delete"; 
            deleteb.id = "delete-button";
            controlicons.innerHTML = `
            <div class="buttons-group">
                <button id="complete-task"> <img src="🦆 icon _tick circle_.svg"></button>
                <button id="delete-task"> <img src="🦆 icon _trash_.svg"></button>
            </div>
            `;
            icons.append(controlicons);
            taskinput.value = "";
        }
    });
    done = document.getElementById("done-button");
    done.addEventListener("click", function()
    {
        listitem = document.getElementById("listitem");
        listitem.style.display = "none";
    });

    // Event delegation for marking tasks as complete and deleting tasks
    tasklist.addEventListener("click", function (e) {
        if (e.target.classlist.contains("complete")) {
            e.target.parentElement.classList.toggle("completed");
        } else if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });
});
