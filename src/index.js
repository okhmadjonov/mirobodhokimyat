import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import i18next from "i18next";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import translation_uz from "./Services/I18N/Translations/Translation_uz.json";
import translation_ru from "./Services/I18N/Translations/Translation_ru.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "ru",
  resources: {
    ru: {
      translation: translation_ru,
    },
    uz: {
      translation: translation_uz,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
