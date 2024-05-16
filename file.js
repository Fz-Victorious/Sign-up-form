
let firstName = document.getElementById("first-name");
let fNameError = document.querySelector(".f-name");

let lastName = document.getElementById("last-name");
let lNameError = document.querySelector(".l-name");

let emailAdd = document.getElementById("email");
let emailError = document.querySelector(".eml");

let pass = document.getElementById("password");
let passError = document.querySelector(".pass");

let confPass = document.getElementById("confirm-password");
let confError = document.querySelector(".conf-pass");
let button = document.querySelector(".btn");

function isValidConfPass(userConf, userPass)
{
    if (userConf !== userPass)
        return "❌ passwords don't match";
    return "";
}

function isValidPassword(userPass)
{
    let passPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (userPass === "")
        return "❌ Password Required";
    if (userPass.length < 8)
        return "❌ Min length is 8";
    if (!userPass.match(passPattern))
        return "❌ Requires at least 1 letter and 1 digit";
    return "";
}

function isValidEmail(userEmail)
{
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(userEmail === "")
    {
        return "❌ Email required";
    }
    if (!userEmail.match(emailPattern))
    {
        return "❌ Invalid Email Address";
    }
    return "";
    
}

function isValidName(userName)
{
    let namePattern = /^[a-zA-Z\s-]+$/;
    if(userName === "")
    {
        return "❌ this field required";
    }
    if(!namePattern.test(userName))
    {
       return `❌ Names only contain letters, spaces, and hyphens.`;
    }
    return "";
}

function checkFunction()
{
    console.log("helloooooooo");
    console.log("First Name",firstName.value);
    if (firstName.value && lastName.value && emailAdd.value && pass.value && confPass.value &&
        !fNameError.innerHTML && !lNameError.innerHTML && !emailError.innerHTML && !passError.innerHTML
        && !confError.innerHTML
    )
    {
        console.log("summary");
        button.removeAttribute("disabled");
        button.style.backgroundColor = "yellowgreen";
    }
    else{
        console.log("helloooo im heeeere")
        button.setAttribute("disabled", true);
        button.style.backgroundColor = "gray";
    }
}

const allInputs = document.querySelectorAll("input");
allInputs.forEach((oneInput)=>{
    oneInput.addEventListener("change", ()=>{
        const id = oneInput.getAttribute("id");
        switch(id)
        {
            case "first-name":
                fNameError.innerHTML = isValidName(firstName.value);
                checkFunction();
                break;
            case "last-name":
                lNameError.innerHTML = isValidName(lastName.value);
                checkFunction();
                break;
            case "email":
                emailError.innerHTML = isValidEmail(emailAdd.value);
                checkFunction();
                break;
            case "password":
                passError.innerHTML = isValidPassword(pass.value);
                if (confPass.value)
                    confError.innerHTML = isValidConfPass(confPass.value, pass.value);
                checkFunction();
                break;
            case "confirm-password":
                {
                    confError.innerHTML = isValidConfPass(confPass.value, pass.value);
                    checkFunction();
                }
                break;
        }
    })
});
