let i
let box=Number(prompt("enter a number from 1 to 10"))
let size = 20
let main = document.createElement('div')
document.body.append(main)
main.style.height = 2000 + "px" 
document.body.style.backgroundColor = "rgb(9, 218, 218)"
main.style.backgroundColor = "rgb(119, 243, 243)"

if( box <= 10 && box > 0){
for(i = 0; i < box; i++){
    let div = document.createElement('div')
        div.style.backgroundColor = "crimson"
        div.style.marginLeft = 5 + "px"
        div.style.border = 5 + "px" + ' ' +  'solid' + "#015b5b"
        div.style.marginTop = 70 + 'px'
        div.style.height = size + 'px';
        div.style.width = size + 'px';
        size = size * 2
        main.append(div)

}
}
else if(box>10) {
    console.log("more than 10")
}
else{
    console.log("invalid")
}