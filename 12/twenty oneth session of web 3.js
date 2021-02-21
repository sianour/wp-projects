// const one = function(){
//      $(this).slideUp(2000).slideDown(2000) 
// }

// const two = function(){
//      $(this).hide(2000).show(2000) 
// }
// const three = function(){
//      $(this).fadeToggle(2000).fadeToggle(2000) 
// }



const boxes = Object.values($('.box'));

boxes.forEach((box, index) => {
     if(index < boxes.length - 2 ) {
          box.addEventListener('click', () =>{
               dF(index)
          })
     }
});

function dF(index) {
     if(index < boxes.length - 2){
          $(boxes[index]).slideUp(2000).slideDown(2000, () => dF(index + 1))

          $('.box').on('click', function(){
               $(this).hide(3000).show(2000)
          })

          }
        }
