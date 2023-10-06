
function createcap(){
    // alert("undefined");
    var capchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    var capchar = capchar.split("");
    var a=capchar[Math.floor(Math.random()*74)];
    var b=capchar[Math.floor(Math.random()*74)];
    var c=capchar[Math.floor(Math.random()*74)];
    var d=capchar[Math.floor(Math.random()*74)];
    var e=capchar[Math.floor(Math.random()*74)];
    var f=capchar[Math.floor(Math.random()*74)];
    var captcha=a+b+c+d+e+f;
    document.getElementById("cap").value=captcha;
}
function validatecap(){
    if(document.getElementById("cap").value==document.getElementById("inp-cap").value){
        alert("form validation is successful.");
    }
    else{
        alert("please enter valid captcha.");
    }
}
createcap();
