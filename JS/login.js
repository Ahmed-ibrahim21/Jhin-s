let username = document.getElementById("username")
let password = document.getElementById("password")
document.getElementById("form").addEventListener("click", function(event){
    event.preventDefault()
  });

function login(){
    if(username.value == "admin" && password.value == "123456"){
        window.location.replace("admin.html");
    }
    else if(username.value == "customer" && password.value == "123456"){
        window.location.replace("shop.html");
    }

    // console.log(`${username.value} & ${password.value}`);
}