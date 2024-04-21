import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App.jsx";
import "./index.css";

// Отримуємо обрану мову з локального сховища або встановлюємо мову за замовчуванням
const currentLanguage = localStorage.getItem("language");
// Функція для зміни назви сайту в залежності від обраної мови
function changeTitleByLanguage(language) {
  const titles = {
    ua: "Комп'ютерний сервіс",
    ru: "Компьютерный сервис",
  };

  // Встановлюємо нове значення для тегу <title> в залежності від обраної мови
  document.title = titles[language];
}

// Змінюємо назву сайту при завантаженні сторінки
changeTitleByLanguage(currentLanguage);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
