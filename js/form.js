function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var gender = document.Form.gender.value;
    var password = document.Form.passwords.value;
    var pass = document.Form.passwordss.value;


    var nameErr = emailErr = mobileErr = genderErr = passwordErr = true;


    if (name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");


        }
    }

    if (email == "") {
        printError("emailErr", "Please enter your email address");
        var elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {

        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("emailErr", "");
            emailErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }


    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }


    if (gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
        elem.classList.add("input-4");
        elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }


    if (password == "") {
        printError("passwordErr", "Please enter the password correctly");
        var elem = document.getElementById("passwords");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        return false;
    }
    else {
        printError("passwordErr", " ");
        var elem = document.getElementById("passwords");
        elem.classList.remove("input-2");
    }
    if (password.length < 8) {
        printError("passwordErr", "Password must be greater than 8 character");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        var elem = document.getElementById("password");
        return false;
    }
    else {
        printError("passwordErr", " ");
        var elem = document.getElementById("passwords");
        elem.classList.remove("input-2");
    }
    if (password.length > 20) {
        printError("passwordErr", "Password must be less than 20 character");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        var elem = document.getElementById("password");
        return false;
    }
    else {
        printError("passwordErr", " ");
        var elem = document.getElementById("passwords");
        elem.classList.remove("input-2");
    }
    if (password.search(/[0-9]/) == -1) {
        printError("passwordErr", "Password have atleast one numeric character");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        var elem = document.getElementById("password");
        return false;
    }
    else {
        printError("passwordErr", " ");
        var elem = document.getElementById("passwords");
    }

    if (password.search(/[a-z]/) == -1) {
        printError("passwordErr", "Password have atleast one lower case character");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        var elem = document.getElementById("password");
        return false;
    }
    else {
        printError("passwordErr", " ");
        var elem = document.getElementById("passwords");
    }
    if (password.search(/[A-Z]/) == -1) {
        printError("passwordErr", "Password have atleast one Upper Case character");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        var elem = document.getElementById("password");
        return false;
    }
    else {
        printError("passwordErr", " ");
        var elem = document.getElementById("passwords");

    }

    if (password.search(/[!\@\#\~\*\&\^\%\?\>\<\+\_\-\|\{\}\,]/) == -1) {
        printError("passwordErr", "Password have atleast one Special character");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        var elem = document.getElementById("password");
        return false;
    }
    else {
        printError("passwordErr", " ");
        var elem = document.getElementById("passwords");

    }

    if (password != pass) {
        printError("passwordErr", "Password are not same");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
        var elem = document.getElementById("password");
        return false;
    }
    else {
        printError("passwordErr", " ");
        var elem = document.getElementById("passwords");
        elem.classList.add("input-1");

    }

    if ((nameErr || emailErr || mobileErr || countryErr || genderErr || passwordErr) == true) {
        return false;
    }
};