import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ja from "./locales/ja.json"
import en from "./locales/en.json"

i18n
    .use(initReactI18next)
    .init({
      lng: 'en', // 使用する言語情報（resourcesから選択するイメージ）
      debug: true, // ブラウザのconsoleにデバッグ情報を表示
      resources: { // 辞書登録
        ja: {
          translation: ja
        },
        en: {
          translation: en
        }
      },
    });
