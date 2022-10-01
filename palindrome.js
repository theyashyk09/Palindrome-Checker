let text = document.getElementById("inp");
let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", () => {
  let inputValue = text.value.toLowerCase();

  let normalVal = inputValue.replace(/\W+|_/g, "");
  let reverseVal = normalVal.split("").reverse().join("");

  if (!inputValue) {
    return;
  } else if (inputValue.length <= 2) {
    result.textContent = "Enter minimum 3 digits to continue";
  } else if (normalVal === reverseVal) {
    result.textContent = "Palindrome";
  } else if (normalVal !== reverseVal) {
    result.textContent = "Not a Palindrome";
  }
});
