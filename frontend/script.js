console.log("SCRIPT LOADED");

document.getElementById("signup-btn").addEventListener("click", async () => {

  console.log("BUTTON CLICKED");

  const fb = document.getElementById("feedback");
  fb.style.display = "block";
  fb.className = "";

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  try {
    const res = await fetch("https://port4u-backend-jgg8.onrender.com/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, role }),
    });

    const text = await res.text();
    fb.textContent = text;

  } catch (err) {
    fb.textContent = "⚠️ " + err.message;
  }
});