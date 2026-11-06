
let currentLanguage = localStorage.getItem("awnLanguage") || "en";

// Change language
function applyLanguage() {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en][data-ar]").forEach(element => {
        element.textContent = element.getAttribute("data-" + currentLanguage);
    });

    const languageBtn = document.getElementById("languageBtn");

    if (languageBtn) {
        languageBtn.textContent =
            currentLanguage === "en" ? "العربية" : "English";
    }

    const loginLink = document.getElementById("loginLink");

    if (loginLink) {
        loginLink.textContent =
            currentLanguage === "en" ? "Login" : "تسجيل الدخول";
    }

    const title = document.querySelector("title");

    if (title && title.dataset.enTitle && title.dataset.arTitle) {
        title.textContent =
            currentLanguage === "en"
                ? title.dataset.enTitle
                : title.dataset.arTitle;
    }
}

function changeLanguage() {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    localStorage.setItem("awnLanguage", currentLanguage);
    applyLanguage();
}

// Dark mode
function toggleTheme() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("awnTheme", isDark ? "dark" : "light");

    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {
        themeBtn.textContent = isDark ? "☀️" : "🌙";
    }
}

// Load saved settings
const savedTheme = localStorage.getItem("awnTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.textContent =
        savedTheme === "dark" ? "☀️" : "🌙";
}

applyLanguage();
