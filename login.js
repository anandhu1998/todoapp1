document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var username = document.querySelector("input[type='text']").value;
  var password = document.querySelector("input[type='password']").value;

  if (username === "admin" && password === "12345") {

    redirectToMainPage();
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

function redirectToMainPage() {
  
  console.log("Redirecting to main page...");

  window.location.href = "main.html";
}

