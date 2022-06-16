function validation() {let name = document.getElementById("name");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let pass = document.getElementById("pass");
    let repass = document.getElementById("repass");
    let flag = 0;
    Name(name.value, email.value, number.value, pass.value, repass.value)
    function Name(name, email, number, pass, repass) {
        if ((name == "") || (!(name.match(/^[a-zA-Z]{2,10}$/)))) {
            document.getElementById("nameerror").innerHTML = "name not valid";
            flag = 1;
            return;
        }
        if ((email == "") || (!(email.match(/^([a-zA-Z]+)([0-9]*)@([a-zA-Z]+).([a-z]){2,10}$/)))) {
            document.getElementById("emailerror").innerHTML = "email not valid";
            flag = 1;
            return;
        }
        if ((number == "") || (!(number.match(/^[0-9]{10}$/)))) {
            document.getElementById("numbererror").innerHTML = "number not valid";
            flag = 1;
            return;
        }
        if ((pass == "") || (!(pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/)))) {
            document.getElementById("passerror").innerHTML = "pass not valid";
            flag = 1;
            return;
        }
        if ((repass == "") || (repass != pass)) {
            document.getElementById("repasserror").innerHTML = "reenter password";
            flag = 1;
            return;
        }
    }
    var location = JSON.parse(localStorage.getItem("location")) ? JSON.parse(localStorage.getItem("location")) : [];
    var form = {
        Name: name.value,
        Email: email.value,
        MobileNumber: number.value,
        Password: pass.value,
        Repassword: repass.value
    }
    location.push(form);
    localStorage.setItem('location', JSON.stringify(location));
    if (flag == 0) {
        name.value = "";
        email.value = "";
        number.value = "";
        pass.value = "";
        repass.value = "";
        document.getElementById("nameerror").innerHTML = "";
        document.getElementById("emailerror").innerHTML = "";
        document.getElementById("numbererror").innerHTML = "";
        document.getElementById("passerror").innerHTML = "";
        document.getElementById("repasserror").innerHTML = "";
    }
}