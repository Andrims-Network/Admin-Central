// credentials database
const usnmAult = "ault@andrims.com";
const usnmBowswa = "bowswa@andrims.com";

function login(){
    //get credentials
    var username = document.getElementById("usnm");
    var password = document.getElementById("pwd");

    //determine user
    if(username == usnmAult){
        userAult();
        mainUnlock();
    }

    if(username == usnmBowswa){
        mainUnlock();
    }
}

function userAult(){
    document.getElementById("welcomeUsername") = ", Ault";
}

function mainUnlock(){
    
}