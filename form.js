function validation() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let pass = document.getElementById("pass");
    let repass = document.getElementById("repass");
    let flag = 0;
        if (((name.value) == "") || (!((name.value).match(/^[a-zA-Z]{2,30}$/)))) {
            document.getElementById("nameerror").innerHTML = "** Name not valid **";
            flag = 1;
            return;
        }
        else{
            document.getElementById("nameerror").innerHTML = "";
        }
        if (((email.value) == "") || (!((email.value).match(/^([a-zA-Z]+)([0-9]*)@([a-zA-Z]+).([a-z]){2,20}$/)))) {
            document.getElementById("emailerror").innerHTML = "** Email not valid **";
            flag = 1;
            return;
        }
        else{
            document.getElementById("emailerror").innerHTML = "";
        }
        if (((number.value) == "") || (!((number.value).match(/^[0-9]{10}$/)))) {
            document.getElementById("numbererror").innerHTML = "** Number not valid **";
            flag = 1;
            return;
        }
        else{
            document.getElementById("numbererror").innerHTML = "";
        }
        if (((pass.value) == "") || (!((pass.value).match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/)))) {
            document.getElementById("passerror").innerHTML = "** Password not valid **";
            flag = 1;
            return;
        }
        else{
            document.getElementById("passerror").innerHTML = "";
        }
        if (((repass.value) == "") || ((repass.value) != (pass.value))) {
            document.getElementById("repasserror").innerHTML = "** Re-enter password **";
            flag = 1;
            return;
        }
        else{
            document.getElementById("repasserror").innerHTML = "";
        }

        if (flag == 0) {
        var location = JSON.parse(localStorage.getItem("location")) ? JSON.parse(localStorage.getItem("location")) : [];
        var form = {Name: name.value, Email: email.value, MobileNumber: number.value, Password: pass.value, Repassword: repass.value}
        location.push(form);
        localStorage.setItem('location', JSON.stringify(location));
        name.value = "";
        email.value = "";
        number.value = "";
        pass.value = "";
        repass.value = "";
        }
}