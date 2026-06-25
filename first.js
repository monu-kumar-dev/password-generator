const bar = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numberCheckbox = document.getElementById("numbers");
const symbolCheckbox = document.getElementById("symbols");
const passwordInput = document.getElementById("password");

const lengthValue = document.getElementById("lengthValue");

bar.addEventListener("input", () => {
  lengthValue.innerText = bar.value;
});

const strength = document.getElementById("strength");
const reason = document.getElementById("reason");

function generatePassword() {
  let allowedChars = "";
  strength.innerText = "";
  reason.innerText = "";
  const uppercasePassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercasePassword = "abcdefghijklmnopqrstuvwxyz";
  const numberPassword = "0123456789";
  const symbolPassword = "!@#$%^&*";

  let score = 0;

  if (uppercaseCheckbox.checked) {
    allowedChars += uppercasePassword;
    score += 1;
  }

  if (lowercaseCheckbox.checked) {
    allowedChars += lowercasePassword;
    score += 1;
  }

  if (numberCheckbox.checked) {
    allowedChars += numberPassword;
    score += 1;
  }

  if (symbolCheckbox.checked) {
    allowedChars += symbolPassword;
    score += 1;
  }

  if (allowedChars.length === 0) {
    alert("please select at least one option");
    return;
  }

  // console.log(allowedChars);

  let password = "";
  const passwordLength = Number(bar.value);
  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[random];
  }
  // passwordInput.innerText = password;
  passwordInput.value = password;

  // checking strength
  if (passwordLength > 10) {
    score += 1;
  }

  if (score <= 2) {
    strength.innerText = "weak";
    strength.classList.remove("weak", "medium", "strong");
    strength.classList.add("weak");
    reason.innerText = "Easy to crack";
  } else if (score <= 4) {
    strength.innerText = "medium";
    strength.classList.remove("weak", "medium", "strong");
    strength.classList.add("medium");
    reason.innerText = "Acceptable but can be improved";
  } else {
    strength.innerText = "strong";
    strength.classList.remove("weak", "medium", "strong");
    strength.classList.add("strong");
    reason.innerText = "Good security";
  }

  progressBarWidth(score);

  arr.push(password);

  if (arr.length > 5) {
    arr.shift();
  }

  localStorage.setItem("passwordHistory", JSON.stringify(arr));
  renderHistory();
}
// generatePassword();

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generatePassword);

const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", async () => {
  const password = passwordInput.value;

  if (!password) {
    alert("Generate a password first!");
    return;
  }

  try {
    await navigator.clipboard.writeText(password);

    copyBtn.innerText = "✅ Copied";

    setTimeout(() => {
      copyBtn.innerText = "📋 Copy";
    }, 2000);
  } catch (error) {
    console.log("Copy failed", error);
  }
});

const arr = JSON.parse(localStorage.getItem("passwordHistory")) || [];
const history = document.querySelector(".history");

function renderHistory() {
  history.innerHTML = "";
  arr.forEach((item, index) => {
    const p = document.createElement("p");
    p.innerText = `${index + 1}. ${item}`;
    history.appendChild(p);
  });
}
renderHistory();

const clearHistory = document.querySelector(".clearHistory");
clearHistory.addEventListener("click", () => {
  arr.length = 0;
  localStorage.removeItem("passwordHistory");
  renderHistory();
});

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.innerText = "🙈 Hide";
  } else {
    passwordInput.type = "password";
    toggleBtn.innerText = "👁 Show";
  }
});

const progressBar = document.getElementById("progress-bar");

function progressBarWidth(score) {
  let width = 0;
  if (score <= 2) {
    width = (score / 5) * 100;
    progressBar.style.width = width + "%";
    progressBar.style.background = "red";
  } else if (score <= 4) {
    width = (score / 5) * 100;
    progressBar.style.width = width + "%";
    progressBar.style.background = "orange";
  } else {
    progressBar.style.width = "100%";
    progressBar.style.background = "green";
  }
}
