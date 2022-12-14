const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const tbody = document.getElementById("tbody");
const msg = document.getElementById("msg");

let todo = JSON.parse(localStorage.getItem("allTodoList")) || [];

function addTodo() {
  //validate
  let isValidate = validate();

  if (isValidate) {
    let myTodo = {
      title: inputBox.value,
      id: todo.length > 0 ? todo[todo.length - 1].id + 1 : 1,
    };

    todo.push(myTodo);
    localStorage.setItem("allTodoList", JSON.stringify(todo));
    inputBox.value='';
showData()

  }
}

function validate() {
  if (inputBox.value.length < 3) {
    msg.style.display = "contents";

    setTimeout(() => {
      msg.style.display = "none";
      inputBox.value = "";
    }, 3000);

    return false;
  }

  return true;
}


function deleteTask(id){

    for(let i = 0; i < todo.length; i++){
        
        if(todo[i].id == id){
            todo.splice(i,1);
          
        }

    }

    localStorage.setItem('allTodoList', JSON.stringify(todo));
    showData();


}







function showData(){
tbody.innerHTML="";
for(let i = 0 ; i < todo.length; i++){
    tbody.innerHTML += `
    <tr>
    <td>${todo[i].title}</td>
    <td><a href="#" class="delete-link" onclick="deleteTask(${todo[i].id})">Delete</a></td>
    </tr>
    `
}

}


showData();