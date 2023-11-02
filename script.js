document.addEventListener("DOMContentLoaded", function () 
{
    const taskinput = document.getElementById("taskinput");
    const addtaskButton = document.getElementById("addtask");
    const tasklist = document.getElementById("tasklist");    
    const buttonsgroup = document.getElementById("buttons-group");
    

    // Event listener to add a new task
    addtaskButton.addEventListener("click", function () 
    {
        const tasktext = taskinput.value.trim();
        if (tasktext !== "") 
        {
            const listbox = document.createElement("div");
            const listitem = document.createElement("li");
            const c_btn = document.createElement("button");
            const d_btn = document.createElement("button");
            const controlbuttons = document.createElement("div");
            listitem.innerHTML = `
                <p>${tasktext}</p>
            `;
            listbox.className = "listbox";
            listbox.id = "listbox";
            c_btn.innerHTML="done";
            d_btn.innerHTML="delete";
            tasklist.appendChild(listbox); 
            listbox.append(listitem); 
            listbox.append(c_btn);
            listbox.append(d_btn);
            listitem.id = "listitem";
            taskinput.value = "";
        }
    });


    
    /* done = document.getElementById("done-button");
    done.addEventListener("click", function()
    {
        listitem = document.getElementById("listitem");
        listitem.style.display = "none";
    });

    // Event delegation for marking tasks as complete and deleting tasks
    tasklist.addEventListener("click", function (e) 
    {
        if (e.target.classlist.contains("complete")) {
            e.target.parentElement.classList.toggle("completed");
        } else if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    }); */
});
