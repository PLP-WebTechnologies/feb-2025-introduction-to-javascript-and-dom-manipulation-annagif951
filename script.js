// Changing text content dynamically
document.getElementById("header-text").textContent = "DOM Manipulation Demo";

// Modifying CSS styles via JavaScript
document.getElementById("intro").style.color = "blue";
document.getElementById("intro").style.fontWeight = "bold";

// Adding or removing an element when a button is clicked
document.getElementById("toggle-button").addEventListener("click", () => {
  const container = document.getElementById("content-container");
  const newElement = document.createElement("p");
  newElement.textContent = "This is a newly added element!";
  
  // Check if the element already exists
  const existingElement = container.querySelector(".new-element");
  if (existingElement) {
    container.removeChild(existingElement);
  } else {
    newElement.className = "new-element";
    container.appendChild(newElement);
  }
});
