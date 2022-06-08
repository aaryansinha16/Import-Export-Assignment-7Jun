var signupDetails = JSON.parse(localStorage.getItem("signupList"))

document.querySelector("form").addEventListener("submit", loginFun)

function loginFun(){
    event.preventDefault()

    loginObj = {
        email : form.loginEmail.value,
        password: form.loginPass.value
    }
    
    if(signupDetails === null){
        alert("Create an Account");
        window.location.href = "signup.html"
    }
    else if(signupDetails.email == loginObj.email && signupDetails.password == loginObj.password){
        alert("Login Successful!")
        localStorage.setItem("loginList", JSON.stringify(signupDetails))
        window.location.href = "index.html"
    }
    else{
        alert("User Does Not Exists")
    }

}
