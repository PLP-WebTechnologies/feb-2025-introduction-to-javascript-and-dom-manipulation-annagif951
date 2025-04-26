// Button Click Event (Changes Color)
document.getElementById("colorChangeBtn").addEventListener("click", function() {
  this.style.backgroundColor = "yellow";
  this.innerText = "Clicked!";
});

// Hover Effect
document.getElementById("hoverText").addEventListener("mouseover", function() {
  this.style.color = "red";
});

document.getElementById("hoverText").addEventListener("mouseout", function() {
  this.style.color = "black";
});

// Keypress Detection
document.getElementById("keypressInput").addEventListener("keypress", function(event) {
  console.log("Key pressed:", event.key);
});

// Secret Action - Double Click
document.getElementById("secretBtn").addEventListener("dblclick", function() {
  alert("Secret unlocked! 🎉");
});

// Form Validation (Checks Password Length)
document.getElementById("sampleForm").addEventListener("submit", function(event) {
  let password = document.getElementById("passwordInput").value;
  if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
      event.preventDefault(); // Prevents form submission
  }
});
