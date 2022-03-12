//variables
const todoInput = document.querySelector("#todo-input")
const addBtn = document.querySelector("add-btn")
const todoList = document.querySelector("ul")

let todoArray = new set();
let user;

//function to add new todo item
const addTodo = () => {

    if(todoArray.size != 5) {
        if(todoInput.value !="") {
            todoInput.parentElement.classList.remove("error")
             todoArray.add(todoInput.value)

            if(user){ 
                let db = [...todoArray]       //spreads the content of todoArray into db
                let _db =(JSON.stringify(db))         //_db is the string form of db
                localStorage.setItem(user, _db)
                setTodo(todoArray)
            } else{
                setTodo(todoArray)
            }

        }else{
            todoInput.parentElement.classList.add("error")
        }
        todoInput.value = ''
    } else {
        alert('you have five things to do')
    }

}
    //event handlers
    addBtn.addEventListener('click,addTodo')

    const setTodo =(arr) => {
        let html = '';

        for(el of arr){
        let html =
        `<li id=${el}>
        <div class ="todo">
           <p>${el}</p>
           <input type="text" class="hide"/>
        </div>

        <div class ="btns">
        <button>Edit</button>
        <button>save</button>
        <button>Delete</button>
        </div>
        <li>`
        htmlArr += html
        }
      todoList.innerHTML =htmlArr
      // informText()  
    }
    
    
    



