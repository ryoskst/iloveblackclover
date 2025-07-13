function welcomeMessage() {
  alert("Welcome to the Magic Knights entrance examination!");
}

function wizardKing() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const response = document.getElementById("response");

  if (input.includes("yes")) {
    response.innerText = "NO YOU SHALL NOT FOR I WILL BECOME WIZARD KING!!!";
  } else {
    response.innerText = "Good riddance.";
  }
}