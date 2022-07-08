// location.replace('/dashboard/dashboard.html')
// credentials database
const usnmAult = "ault@andrims.com";
const usnmBowswa = "bowswa@andrims.com";
const usnmRamenator = "ramenator@andrims.com";

const login_data = JSON.parse("login_database.json");
console.log(login_data);

const pwdKey = CryptoJS.AES.decrypt("U2FsdGVkX1/KCrMxHMpAAYHwmXku/EiQAWQgkXkpGaxoem0A5JDA6dxwpbRcylaT", "andrims").toString(CryptoJS.enc.Utf8);
const pwdAult = CryptoJS.AES.decrypt("U2FsdGVkX1+Z+RZojd+sQY1VWWHERVMdf48Kra9Iyd0=", pwdKey).toString(CryptoJS.enc.Utf8);
const pwdBowswa = CryptoJS.AES.decrypt("U2FsdGVkX1/ayi8UI3oaT3TJs/jXjUrKrQvoJmOuKXw7Aksd3djcb5BENTJUOAYkaGxjZzLzs3muDdtT7RIvHoJfJ6waReYv2W8QikwYagZheanrJdNXajTPkSntg2i7tDIfXcnWwhX3Re79R+fR696tR7fOL7FmtvDP5OnI79o=", pwdKey).toString(CryptoJS.enc.Utf8);
const pwdRamenator = CryptoJS.AES.decrypt("U2FsdGVkX1+ZmzrKkCm5GgdWH6pIU2emTlQvUOhf7kY=", pwdKey).toString(CryptoJS.enc.Utf8);

var timeout;
function loader(){
    document.getElementById('login').style.display = 'none';
    document.getElementById('loader').style.display = 'block';
    timeout = setTimeout(login, 1000);
    document.getElementById('uL').style.color = 'black';
    document.getElementById('uL').innerHTML = 'Username';
    document.getElementById('pL').style.color = 'black';
    document.getElementById('pL').innerHTML = 'Password';
}
//onclick login, trigger function
function login(){
    //get credentials
    var username = document.getElementById("usnm").value;
    var password = document.getElementById("pwd").value;

    //determine user
    if(username == usnmAult){
        if(password == pwdAult){
            userAult();
        } else{
            document.getElementById('pL').style.color = 'red';
      document.getElementById('pL').innerHTML = '<b>Incorrect Password</b>';
        }
    } else if(username == usnmBowswa){
        if(password == pwdBowswa){
            userBowswa();
        } else{
            document.getElementById('pL').style.color = 'red';
      document.getElementById('pL').innerHTML = '<b>Incorrect Password</b>';
        }
    } else if(username == usnmRamenator){
        if(password == pwdRamenator){
            userBowswa();
        } else{
            document.getElementById('pL').style.color = 'red';
      document.getElementById('pL').innerHTML = '<b>Incorrect Password</b>';
        }
    } else{
        document.getElementById('uL').style.color = 'red';
      document.getElementById('uL').innerHTML = '<b>Incorrect User</b>';
      document.getElementById('pL').style.color = 'red';
      document.getElementById('pL').innerHTML = '<b>Incorrect Password</b>';
    }
  document.getElementById('login').style.display = 'block';
        document.getElementById('loader').style.display = 'none';
}

//Triggers unlock procedures(Update welcome message, authenticate, display dashboard access)
function userAult(){
  document.getElementById('loginBtn').style.display = 'none';
    document.getElementById("welcomeUsername").innerHTML = "Hey Ault!";
    document.getElementById("continueButton").removeAttribute("hidden");
    userAuth = "ault";
}

function userBowswa(){
    document.getElementById("welcomeUsername").innerHTML = "Hey Bowswa!";
   document.getElementById('loginBtn').style.display = 'none'; document.getElementById("continueButton").removeAttribute("hidden");
    userAuth = "bowswa";
}

function continueButton(){
    if(userAuth == "locked"){
        window.alert("Authentication failed!");
    } else{
        window.location.href="/dashboard/dashboard.html";
    }
}
