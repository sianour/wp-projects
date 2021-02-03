let table = document.getElementById("fetch")
let title = document.getElementById("title")
let body = document.getElementById("body")
let user = document.getElementById("user")
let show = {
    body:"",
    userId:0,
    title:""
   
}
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(res1){
    return res1.json()
  })
  .then(function(res2){
    console.log(res2)
  });
function info(a){
    a.preventDefault()
    show.title = title.value
    show.body = body.value
    show.user = user.value
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(show),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(function(res1){
  return res1.json()
})
.then(function(res2){
  console.log(res2)
});

}
table.addEventListener("submit",info)