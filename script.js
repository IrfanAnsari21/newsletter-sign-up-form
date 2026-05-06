const card = document.querySelector(".card");
const successMsg = document.querySelector(".success-msg");
const emailInput = document.querySelector("#emailInput");
const subscribeBtn = document.querySelector("#subscribeBtn");
const dismissBtn = document.querySelector("#dismissBtn");
const errorMsg = document.querySelector("#errorMsg");
const strongEmail = document.querySelector("#strongEmail");

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError() {
    errorMsg.style.display = "block";
    emailInput.style.border = "1px solid var(--Red)";
    emailInput.style.backgroundColor = "hsl(4, 100%, 94%)";
    emailInput.style.color = "var(--Red)";
}

function clearError() {
    errorMsg.style.display = "none";
    emailInput.style.border = "1px solid var(--Grey)";
    emailInput.style.backgroundColor = "";
    emailInput.style.color = "";
}

subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        showError();
        return;
    }

    clearError();
    strongEmail.textContent = email;
    card.style.display = "none";
    successMsg.style.display = "flex";
});

dismissBtn.addEventListener("click", () => {
    successMsg.style.display = "none";
    card.style.display = "flex";
    emailInput.value = "";
    clearError();
});

emailInput.addEventListener("input", () => {
    if (isValidEmail(emailInput.value.trim())) {
        clearError();
    }
});