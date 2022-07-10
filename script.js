// For ease of development while working on dashboard.html :
location.replace('/dashboard/dashboard.html');

// --------------------------------------
// -------- BEGIN AUTH PROCESS ----------
// --------------------------------------

// internal json, will be in use temporarily until server side json access is setup
const credentialsData = `{
    "usernames": {
        "ault": "ault@andrims.com",
        "bowswa": "bowswa@andrims.com",
        "ramenator": "ramenator@andrims.com"
    },
    "passwords": {
        "ault": "U2FsdGVkX1+Z+RZojd+sQY1VWWHERVMdf48Kra9Iyd0=",
        "bowswa": "U2FsdGVkX1/ayi8UI3oaT3TJs/jXjUrKrQvoJmOuKXw7Aksd3djcb5BENTJUOAYkaGxjZzLzs3muDdtT7RIvHoJfJ6waReYv2W8QikwYagZheanrJdNXajTPkSntg2i7tDIfXcnWwhX3Re79R+fR696tR7fOL7FmtvDP5OnI79o=",
        "ramenator": "U2FsdGVkX1+ZmzrKkCm5GgdWH6pIU2emTlQvUOhf7kY="
    },
    "encryption": {
        "cryptedKey": "U2FsdGVkX1/KCrMxHMpAAYHwmXku/EiQAWQgkXkpGaxoem0A5JDA6dxwpbRcylaT",
        "keyCodeDecrypt": "andrims"
    }
}`;

// convert json data to js readable objects
const credsObj = JSON.parse(credentialsData);

//extract usernames to indiv vars
const usernames = credsObj['usernames'];
const usnmAult = usernames['ault'];
const usnmBowswa = usernames['bowswa'];
const usnmRamenator = usernames['ramenator'];

//extract encrypted passwords to indiv vars
const passwords = credsObj['passwords'];
const encPwdAult = passwords['ault'];
const encPwdBowswa = passwords['bowswa'];
const encPwdRamenator = passwords['ramenator'];

//extract decryption keys
const decryptionKey = credsObj['encryption']['cryptedKey'];
const secondLayerKey = credsObj['encryption']['keyCodeDecrypt'];

//decrypt passwords for storage
const pwdKey = CryptoJS.AES.decrypt(decryptionKey, secondLayerKey).toString(CryptoJS.enc.Utf8);
const pwdAult = CryptoJS.AES.decrypt(encPwdAult, pwdKey).toString(CryptoJS.enc.Utf8);
const pwdBowswa = CryptoJS.AES.decrypt(encPwdBowswa, pwdKey).toString(CryptoJS.enc.Utf8);
const pwdRamenator = CryptoJS.AES.decrypt(encPwdRamenator, pwdKey).toString(CryptoJS.enc.Utf8);

// --------------------------------------
// ---------- END AUTH PROCESS ----------
// --------------------------------------

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
            userRamenator();
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
    postLogin();
    userAuth = "ault";
}

function userBowswa(){
    document.getElementById("welcomeUsername").innerHTML = "Hey Bowswa!";
    postLogin();
    userAuth = "bowswa";
}

function userRamenator(){
    document.getElementById("welcomeUsername").innerHTML = "Hey Ramenator!";
    postLogin();
    userAuth = "ramenator";
}

function postLogin(){
    document.getElementById("continueButton").removeAttribute("hidden");
    document.getElementById("loginForm").setAttribute("hidden", "true");
    document.getElementById("adminOnly").setAttribute("hidden", "true");
    document.getElementById("welcomeUsername").style.fontSize = "35px";
}

function continueButton(){
    if(userAuth == "locked"){
        window.alert("Authentication failed!");
    } else{
        window.location.href="/dashboard/dashboard.html";
    }
}
