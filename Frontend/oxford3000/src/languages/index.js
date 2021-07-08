import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            home: require("./home-en.json"),
        },
        th: {
            home: require("./home-th.json"),
        },
    },
    ns: ["home"],
    whitelist: ["en", "th"],
    lng: "en",
    fallbackLng: "en",
    detection: {
        order: ["localStorage"],
        lookupLocalStorage: "lng",
        checkWhitelist: true,
    },
    interpolation: {
        escapeValue: false,
    },
});
