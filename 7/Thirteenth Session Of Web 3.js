function myFunction() {
    let e = document.getElementById("actions");
    let strUser = e.value;


    if( strUser == 1){

    window.location.assign(document.getElementById("url").value);


}else{

    location.reload();

}


}
