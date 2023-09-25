function submit(){
    switch(""){
        case document.getElementById("name-eng").value:
        case document.getElementById("name-hindi").value:
        case document.getElementById("dob").value:
        case document.getElementById("father-name").value:
        // case document.getElementById("gender").value:
        case document.getElementById("house-no").value:
        case document.getElementById("root").value:
        case document.getElementById("area").value:
        case document.getElementById("pin-code").value:
            alert("please fill all entries");
    }
    var village=document.getElementById("village");
    var city=document.getElementById("city");
    if(!village.checked && !city.checked){
        alert("please select your resedential area.");
    }
    if(document.getElementById("gender").value=="please-select-your-gender"){
        alert(document.getElementById("gender").value);
    }
}