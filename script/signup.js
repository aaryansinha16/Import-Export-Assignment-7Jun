document.querySelector("#form").addEventListener("submit",signFun )

var loginDetails = JSON.parse(localStorage.getItem("loginList"))

console.log(loginDetails)
function signFun(){
    event.preventDefault()

    var signupObj = {
        username :form.signupUsername.value,
        email : form.signupEmail.value,
        password : form.signupPass.value
    }

    if(loginDetails == null || signupObj.email != loginDetails.email){
        alert("SignUp successful!")
        localStorage.setItem("signupList", JSON.stringify(signupObj))
        window.location.href = "login.html"
    }
    else {
        alert("Email already used!")
    }

}

