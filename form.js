function validation() {
    var a = /^[a-zA-Z]{2,10}$/
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var b = /^([a-zA-Z0-9]+)@([a-zA-Z]+).([a-z]){2,10}$/
    var email = document.getElementById("email");
    var c = /^[0-9]{10}$/
    var number = document.getElementById("number");
    var d = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/
    var pass = document.getElementById("pass");
    var repass = document.getElementById("repass");

    if ((fname.value == "") && (lname.value == "")) {
        alert("  name not valid");
        return;
    }

    if (!(fname.value).match(a) && !(lname.value).match(a)) {
        alert(" name not  valid")
        return;
    }
    if (email.value == "") {
        alert(" email not valid");
        return;
    }
    if (!(email.value).match(b)) {
        alert(" email not valid")
        return
    }
    if ((number.value) == "") {
        alert(" contect not valid");
        return;
    }
    if (!(number.value).match(c)) {
        alert(" contect not valid");
        return;
    }
    if ((pass.value) == "" && ((pass.value).length <= 8) || ((pass.value).length > 16)) {
        alert(" password not valid");
        return;
    }
    if (!(pass.value).match(d)) {
        alert("password invalid ");
    }
    if ((repass.value) == "") {
        alert("password invalid")
    }
    if ((repass.value) == (pass.value)) {
        true;
    }
    if ((repass.value) != (pass.value)) {
        alert("plese enter match password")
    }
    var location = JSON.parse(localStorage.getItem("location")) ? JSON.parse(localStorage.getItem("location")) : [];
    var form = {
        firstname: fname.value,
        lastname: lname.value,
        email: email.value,
        number: number.value,
        password: pass.value,
        repassword: repass.value
    }
    location.push(form);
    localStorage.setItem('location', JSON.stringify(location));
    fname.value = "";
    lname.value = "";
    email.value = "";
    number.value = "";
    pass.value = "";
    repass.value = "";

}