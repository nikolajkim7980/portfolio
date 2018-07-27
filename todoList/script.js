

let todos = ["Golf", "Homework", "Coding"];
render()


function render() {
  document.querySelector(".todo-list").innerHTML = "";
  
  todos.forEach( function(todo, i){
      let btn = document.createElement("button")
      btn.innerText = (i+1) + (".") + (" ") + todo;
     btn.addEventListener('click', function() {
      delete todos[i]
      render();
     });
      document.querySelector(".todo-list").appendChild(btn);
  }) 
}

function add(){
  let input = document.querySelector("input");
  todos.push(input.value);
  render()
}
