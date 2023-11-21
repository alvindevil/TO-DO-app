document.addEventListener("DOMContentLoaded", function () {
  const taskinput = document.getElementById("taskinput");
  const addtaskButton = document.getElementById("addtask");
  const tasklist = document.getElementById("tasklist");
  const buttonsgroup = document.getElementById("buttons-group");

  // Event listener to add a new task
  addtaskButton.addEventListener("click", function () {
    const tasktext = taskinput.value.trim();
    if (tasktext !== "") 
    {
      const listbox = document.createElement("div");
      const listitem = document.createElement("li");
      const buttons = document.createElement("div");
      const c_btn = document.createElement("button");
      const d_btn = document.createElement("button");
      listbox.className = "listbox";
      listitem.className = "listitem";
      buttons.className = "c_btns";
      buttons.id = "c_btns";
      c_btn.className = "c_btn";
      d_btn.className = "d_btn";
      listitem.innerHTML = `
            ${tasktext}
            `;
      listbox.id = "listbox";
      c_btn.innerHTML = "done";
      d_btn.innerHTML = "delete";
      tasklist.appendChild(listbox);
      listbox.appendChild(listitem);
      listbox.appendChild(buttons);
      buttons.appendChild(c_btn);
      buttons.appendChild(d_btn);
      listitem.id = "listitem";
      c_btn.id = c_btn;
      d_btn.id = d_btn;
      taskinput.value = "";
      var is_checked = false;

      c_btn.addEventListener("click", () => {
        if (is_checked == false) {
          listitem.style.textDecoration = "line-through";
          listitem.style.color ="black";
          is_checked = true;
        } else {
            listitem.style.textDecoration = "initial";
            listitem.style.color ="white";
            is_checked = false;
        }
      });

      d_btn.addEventListener("click", () => {
        listbox.style.display = "none";
      });
    
    }
  });
  
});
