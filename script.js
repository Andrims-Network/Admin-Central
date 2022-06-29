// credentials database
const usnmAult = "ault@andrims.com";
const usnmBowswa = "bowswa@andrims.com";

const pwdAult = "testpwd";
const pwdBowswa = "temppwd";

function login(){
    //get credentials
    var username = document.getElementById("usnm").value;
    var password = document.getElementById("pwd").value;

    //determine user
    if(username == usnmAult){
        if(password == pwdAult){
            userAult();
            mainUnlock();
        } else{
            window.alert("Wrong Password");
        }
    }

    if(username == usnmBowswa){
        if(password == pwdBowswa){
            userBowswa();
            mainUnlock();
        } else{
            window.alert("Wrong Password");
        }
    }
}

function userAult(){
    document.getElementById("welcomeUsername").innerHTML = ", Ault";
}

function userBowswa(){
    document.getElementById("welcomeUsername").innerHTML = ", Ault";
}

function mainUnlock(){
    
}