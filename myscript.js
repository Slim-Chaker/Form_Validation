let name = document.getElementById("name");
let address = document.getElementById("address");
let email = document.getElementById("email");
let password = document.getElementById("password");
let comment = document.getElementById("comment");

let form = document.getElementById("forms_validation");


form.addEventListener("submit", e => {
    e.preventDefault();
    fEmpty(name, address, comment);
    fEmail(email);
    fPassword(password);
});



//NAME -ADDRESS -COMMENTS: VALIDATION

function fEmpty(name, address, comment) {
    if (name.value == "") {
        return alert(" name case was empty");
    }
    if (address.value == "") {
        return alert("Adress case was empty");
    }
    if (comment.value == "") {
        return alert("comment case was empty");
    }
}

//EMAIL VALIDATION

function fEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true
    }
    alert("invalid email address!")
    email.focus();
    return false
}

//PASSWORD VALIDATION

function fPassword(password) {
    if (password.value.length < 8) {
        alert("Error: Password must contain at least six characters!");
        password.focus();
        return false;
    }
    
    if (!/[0-9]/.test(password.value)) {
        alert("Error: password must contain at least one number!");
        password.focus();
        return false;
    }
   
    if (!/[a-z]/.test(password.value)) {
        alert("Error: password must contain at least one lowercase letter!");
        password.focus();
        return false;
    }
   
    if (!/[A-Z]/.test(password.value)) {
        alert("Error: PassWord must contain at least one uppercase letter!");
        password.focus();
        return false;
    }
}

