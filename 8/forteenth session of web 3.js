let toDo = document.getElementById("forms")
let input = document.getElementById("toDo")
let mylist = document.getElementById("list")
const brw = document.getElementById("brw")
brw.innerText = window.navigator.userAgent


toDo.onsubmit = function(d){
    d.preventDefault()
    let task = document.createElement("li")
    let btn = document.createElement("button")
    task.innerText=input.value
    btn.style.margin = 10 + "px"; 
    btn.style.backgroundColor = "crimson"
    btn.innerText = "X"
    task.append (btn)
    mylist.append (task)
    btn.onclick=function(c){
       btn.parentElement.remove(c) 
    }

}
function saveTodo(){
    localStorage.setItem("userTodo",input.value)
}
toDo = addEventListener("submit",saveTodo)
let userTodo = localStorage.getItem("userTodo")
input.value = userTodo