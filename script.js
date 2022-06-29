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
        } else{
            window.alert("Wrong Password");
        }
    } else if(username == usnmBowswa){
        if(password == pwdBowswa){
            userBowswa();
        } else{
            window.alert("Wrong Password");
        }
    } else{
        window.alert("Invalid Username. User does not exist");
    }
}

//Triggers unlock procedures(Update welcome message, authenticate, display dashboard access)
function userAult(){
    document.getElementById("welcomeUsername").innerHTML = ", Ault";
    document.getElementById("continueButton").removeAttribute("hidden");
}

function userBowswa(){
    document.getElementById("welcomeUsername").innerHTML = ", Bowswa";
    document.getElementById("continueButton").removeAttribute("hidden");
}
