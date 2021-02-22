let input = document.getElementById("toDo")
$('#forms').on('submit', function(d){
    d.preventDefault()
    let task = $("<li></li>")
    let btn = $('<button type=button class=btn></button>')
    task.text(input.value)
    btn.text("X")
    task.append (btn)
    $('#list').append (task)
    $('.btn').on('click', function(){
       btn.parent().remove() 
    })

})
function saveTodo(){
    localStorage.setItem("userTodo",input.value)
}

$("#forms").on("submit", saveTodo)
let userTodo = localStorage.getItem("userTodo")
$("todo").val('userTodo')


$('#brw').text(window.navigator.userAgent) 



