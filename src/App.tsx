import React from "react";
import "./i18n/config"
import "./App.css";
import { ComponentA } from "./components/ComponentA";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: "ja" | "en") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("App.title")}</h1>
        <div>
          <button className="Language-button" onClick={() => changeLanguage("ja")}>ja</button>
          <button className="Language-button" onClick={() => changeLanguage("en")}>en</button>
        </div>
        <ComponentA/>
      </header>
    </div>
  );
}

export default App;
