const API_URL = "http://localhost:3000/api/user";

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("registerUser").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json()
    if(res.ok){
        alert("You Register To Our Services. Yuo Can Now Login.")
        window.location.href = "login.html"
    }else{
        alert(data.message || "You Register Has Been Failed.")
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPassword").value;

    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json()
    if(res.ok){
        localStorage.setItem("token", data.token)
        window.location.href = "index.html"
    }else{
        alert(data.message || "You Login Has Been Failed.")
    }
  });
}
