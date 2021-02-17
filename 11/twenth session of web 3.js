const sh = document.getElementById("b1");
const sh2 = document.getElementById("b2");
const sh3 = document.getElementById("b3");
const sh4 = document.getElementById("b4");


//create callback function

sh.addEventListener("click",function(){
     $(".box").toggle(2000).toggle(2000, function(){
          $(".box2").toggle(2000).toggle(2000, function(){
               $(".box3").toggle(2000).toggle(2000, function (){
                    $(".box4").toggle(2000).toggle(2000)
               })

          } )
      });
});

sh2.addEventListener("click", function(){
     $(".box2").toggle(2000).toggle(2000, function(){
          $(".box3").toggle(2000).toggle(2000, function(){
               $(".box4").toggle(2000).toggle(2000)
          })

     })
});

sh3.addEventListener("click", function(){
     $(".box3").toggle(2000).toggle(2000, function(){
          $(".box4").toggle(2000).toggle(2000)
     })
});

sh4.addEventListener("click", function(){
      $(".box4").toggle(2000).toggle(2000)
})




    






