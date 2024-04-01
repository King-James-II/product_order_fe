// Function to check form inputs and display errors if invalid
function checkForm() {
  // Checking quantity input
  if (!checkQuantity()) {
    showError("#quantity");
  } else {
    removeError("#quantity");
  }
  
  // Checking color input
  if (!checkColor()) {
    showError("#color");
  } else {
    removeError("#color");
  }
  
  // Checking state input
  if (!checkState()) {
    showError("#state");
  } else {
    removeError("#state");
  }
  
  // If all inputs are valid, display status message
  if (checkQuantity() && checkColor() && checkState()) {
    document.getElementById("status").classList.remove("hidden");
  }
}

// Function to display error for input field
function showError(id) {
  const input = document.querySelector(id);
  input.classList.add("error");
}

// Function to remove error for input field
function removeError(id) {
  const input = document.querySelector(id);
  input.classList.remove("error");
}

// Function to check if quantity input is valid
const checkQuantity = () => {
  const input = document.querySelector("#quantity");
  return input.value > 0;
};

// Function to check if color input is valid
const checkColor = () => {
  const input = document.getElementById("color");
  return input.value !== "--";
};

// Function to check if state input is valid
const checkState = () =>{
  const input = document.getElementById("state");
  return input.value.length === 2;
};
