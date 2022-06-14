function validation() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var number = document.getElementById("number");
    var pass = document.getElementById("pass");
    var repass = document.getElementById("repass");
    Name(name.value,email.value,number.value,pass.value,repass.value)
function Name(name,email,number,pass,repass){
    if((name == "")||(!(name.match(/^[a-zA-Z]{2,10}$/)))){
       alert("name not valid");
       return;
    }
    if((email == "")||(!(email.match(/^([a-zA-Z0-9]+)@([a-zA-Z]+).([a-z]){2,10}$/)))){
        alert("email not valid");
        return;
    }
    if((number == "")||(!(number.match(/^[0-9]{10}$/)))){
        alert("number not valid");
        return;
    }
    if((pass == "")||(!(pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/)))){
        alert("password not valid");
        return;
    }
    if((repass == "")||(repass != pass)){
        alert("repass not valid");
        return;
    }
}
    var location = JSON.parse(localStorage.getItem("location")) ? JSON.parse(localStorage.getItem("location")) : [];
    var form = {
        Name: name.value,
        Email:email.value,
        MobileNumber:number.value,
        Password:pass.value,
        Repassword:repass.value
    }
    location.push(form);
    localStorage.setItem('location', JSON.stringify(location));
    name.value = "";
    email.value = "";
    number.value="";
    pass.value="";
    repass.value="";
}