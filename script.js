// credentials database
const usnmAult = "ault@andrims.com";
const usnmBowswa = "bowswa@andrims.com";

const pwdAult = "testpwd";
const pwdBowswa = "temppwd";

//fopen([filepath], #)
//number at and: 0 for read, 3 for write
var aultVerification = fopen("/aultverify.txt",3);
var bowswaVerification = fopen("bowswaverify.txt",3);
var verification;

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

//Triggers unlock procedures(Update welcome message, provide login)
function userAult(){
    document.getElementById("welcomeUsername").innerHTML = ", Ault";
    fwrite(aultVerification, "open");
}

function userBowswa(){
    document.getElementById("welcomeUsername").innerHTML = ", Ault";
}
