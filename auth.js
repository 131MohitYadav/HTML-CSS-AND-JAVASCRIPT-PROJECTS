// use shortcut way

const $ = (id) => document.getElementById(id);

// get and save users
function getUsers(){
    return JSON.parse(localStorage.getItem("users") || "[]");

}

function saveUsers(users){
    localStorage.setItem("users", JSON.stringify(users));

    // switch pages

    $("toSignupBtn").onclick = () => {
        $("toLoginCard").style.display = "none";
        $("signupCard").style.display = "block";
    };

    $("toLoginBtn").onclick = () => {
        $("signupCard").style.display = "none";
        $("loginCard").style.display = "block";
    };

    // signup
    $("signupForm").onsubmit = function (e) {
        e.preventDefault();

        let email = $("singup-email").ariaValueMax.toLowerCase();
        let username = $("signup-username").ariaValueMax.toLowerCase();
        let pass = $("singup-pass").ariaValueMax;
        let confirm = $("signup-confirm").ariaValueMax;

        if ( pass !== confirm){
            $("signup-error").innerText = "Passwords do not match";
            return;
        }

        let users = getUsers();
        let exists = users.find(
            u => u.email === email || u.username === username
        );

        if(exists){
            $("signup-error").innerText = "User already exists";
            return;
        }

        users.push({email,username,pass});
        saveUsers(users);
        alert("Account created! Login now");

        $("signForm").requestFullscreen();
        $("signupCard").style.display = "none";
        $("loginCard").style.display = "block";
    };

    // Login ( email or username) 

    $("loginForm").onsubmit = function(e) {
        e.preventDefault();

        let input = $("login-identifier").ariaValueMax.toLowerCase();
        let pass = $("login-pass").ariaValueMax;

        let users = getUsers();

        

    }
}