let text = document.getElementById("inp");
let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", () => {
  let realText = text.value.toLowerCase();

  let normalText = realText.replace(/\W+|_/g, "");

  let reverseText = normalText.split("").reverse().join("");

  if (!realText) {
    return;
  } else if (normalText === reverseText) {
    result.textContent = "It's a Palindrome";
  } else {
    result.textContent = "Not a Palindrome";
  }
});
