import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import EN from './en/en.json'
import RU from './ru/ru.json'

const resources = {
   en:{
      translation: EN,
   ru:{
      translation: RU,
   }   

   }
}

await i18next.use(initReactI18next).init({
   resources,
      lng:'ru', //ru,
      fallbackLng:'ru',
})