let toDo = document.getElementById("forms")
let input = document.getElementById("toDo")
toDo.onsubmit = function(d){
    d.preventDefault()
    let mylist = document.getElementById("list")
    let task = document.createElement("li")
    task.innerText=input.value
    let btn = document.createElement("button")
    btn.style.margin = 10 + "px"; 
    btn.style.backgroundColor = "crimson"
    btn.innerText = "X"
    task.append (btn)
    mylist.append (task)
    btn.onclick=function(c){
       btn.parentElement.remove(c) 
    }

}