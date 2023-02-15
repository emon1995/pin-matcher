function getPin() {
  const pin = generatePin();
  const PinString = pin + "";

  if (PinString.length === 4) {
    return PinString;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

// GENERATE PIN
const pinFieldElement = document.getElementById("pin-field");
document.getElementById("pin-btn").addEventListener("click", function () {
  pinFieldElement.value = getPin();
});

// ENTER PIN
const matchFieldElement = document.getElementById("match-field");
document
  .getElementById("match-pin")
  .addEventListener("click", function (event) {
    if (event.target.innerText === "C") {
      matchFieldElement.value = "";
    } else if (event.target.innerText === "<") {
      const inputValue = matchFieldElement.value;
      const splitValue = inputValue.split("");
      splitValue.pop();
      const value = splitValue.join("");
      matchFieldElement.value = value;
    } else {
      const previousValue = event.target.innerText;
      const newValue = matchFieldElement.value + previousValue;
      matchFieldElement.value = newValue;
    }
  });

// SUBMIT PIN MATCH
const pinSuccess = document.getElementById("pin-success");
const pinWrong = document.getElementById("pin-wrong");
const tryMatch = document.getElementById("try");

document.getElementById("submit-btn").addEventListener("click", function () {
  if (pinFieldElement.value === matchFieldElement.value) {
    pinSuccess.style.display = "block";
    pinWrong.style.display = "none";
  } else {
    pinWrong.style.display = "block";
    pinSuccess.style.display = "none";
    tryMatch.innerText -= 1;
    if (tryMatch.innerText === "0") {
      document.getElementById("submit-btn").style.cursor = "not-allowed";
      document.getElementById("submit-btn").setAttribute("disabled", true);
    }
  }
});
