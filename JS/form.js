let error_e= document.getElementById("error_e");
let error_p= document.getElementById("error_p");
let error_n= document.getElementById("error_n");

 
let regname='admin';
let regpwd=12345;

function validateForm(){
 
    let username= document.getElementById("username");
    let pwd= document.getElementById("pwd");
    validate_login(username, pwd, myCallbackFuntion);
    return false;
}


function validate_login(username, pwd, callback){
    
    if(username.value==""){
        error_e.innerHTML="Please enter your username";
        error_e.style.color="red";
        return false;
    }else if(!(regname==username.value)){
        error_e.innerHTML="Incorrect Username!! username is case-sensitive";
        error_e.style.color="red";
        return false;
    }else if(pwd.value==""){
        error_e.innerHTML="";
        error_p.innerHTML="Please enter your password";
        error_p.style.color="red";
        return false;
    }else if(!(regpwd==pwd.value)){
        error_e.innerHTML="";
        error_p.innerHTML="Incorrect Password";
        error_p.style.color="red";
        return false;
    }else{
       callback();
      
         }

}
//************callback***********
function myCallbackFuntion(){
  alert("sucessfully logged in!!!")
  window.location.href="todolist.html";
}

