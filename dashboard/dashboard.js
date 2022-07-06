window.onscroll = fixedHeader();

var header = document.getElementsByClassName("header")[0];
console.log(header);
var headerPos = header.offsetTop;

function fixedHeader(){
    if(window.pageYOffset > headerPos){
        header.classList.add("sticky");
    } else{
        header.classList.remove("sticky");
    }
}