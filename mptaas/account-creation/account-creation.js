function submit(){
    console.log("submit");
    let name_en,name_hind,dobirth,father_nam,gend;
    name_en=document.getElementById("name-eng").value;
    name_hind=document.getElementById("name-hindi").value;
    dobirth=document.getElementById("dob").value;
    father_nam=document.getElementById("father-name").value;
    gend=document.getElementById("gender").value;
    
    let house_no,root,area,pin;
    house_no=document.getElementById("house-no").value;
    root=document.getElementById("root").value;        
    area=document.getElementById("area").value;
    pin=document.getElementById("pin-code").value;
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
    let villag=document.getElementById("village").value;
    console.log(typeof 'hello');
    let city=document.getElementById("city");
    console.log(villag);
    if(!villag.checked && !city.checked){
        alert("please select your resedential area.");
    }
    if(document.getElementById("gender").value=="please-select-your-gender"){
        alert(document.getElementById("gender").value);
    }
    let locality;
    if(villag.checked){
        locality=document.getElementById("village").value;
    }
    else if(city.checked){
        locality=document.getElementById("city").value;
    }
    //for sending the user data to server side
        const userinfo={
        name_eng:name_en,
        name_hindi:name_hind,
        dob:dobirth,
        gender:gend,
        father_name:father_nam,
        house_no: house_no,
        area: area,
        root: root,
        pin: pin,
        locality: locality
    };
    console.log(userinfo);
    sendDataToServer(userinfo);  
}
function sendDataToServer(data) {
    // Use AJAX or Fetch to send the data to the server
    // Example using Fetch API
    const baseurl='http://localhost:3000/'
    fetch(baseurl, {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(data), // Convert the data to JSON format
    })
    console.log("at client");
    .then(response => response.json())
        .then(data => {
            // Handle the response from the server if needed
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    
}
