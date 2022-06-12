let loginDetails = JSON.parse(localStorage.getItem("loginList"))
console.log(loginDetails)
function navbar(){
    if(loginDetails == undefined){
        return `
        <div id="home">
        <h3>
                <a href="index.html">Find Recipe's</a>
        </h3>
        </div>
        <div id="options">
            <h3>
                <a href="rod.html">Recipe of the Day</a>
            </h3>
            <h3>
                <a href="surprise.html">Surprise Me!</a>
            </h3>
            <h3>
                <a href="login.html">Login</a>
            </h3>
            <h3>
                <a href="signup.html">SignUp</a>
            </h3>
        </div>
        `;
    }
    else{
        return `
        <div id="home">
        <a href="index.html">
            <img src="https://s3.amazonaws.com/thumbnails.venngage.com/template/9f596769-790d-4b5f-bb80-668016a9c920.png" alt="">
        </a>
        <h3>
                <a href="index.html">Find Recipe's</a>
        </h3>
        </div>
        <div id="options">
            <h3>
                <a href="rod.html">Recipe of the Day</a>
            </h3>
            <h3>
                <a href="surprise.html">Surprise Me!</a>
            </h3>
            <h3>
                <a href="cart.html" >Cart</a>
            </h3>
            <h3>
                <a href="login.html" id="logOut">LogOut</a>
            </h3>
        </div>
        `;
    }
}

export default navbar