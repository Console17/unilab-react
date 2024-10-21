import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          h1: "One More Friend",
          h2: "Thousands More Fun!",
          p: "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different petsthat can meet your needs",
          btn1: "View Intro",
          btn2: "Explore Now",
          home: "Home",
          category: "Category",
          contact: "Contact",
          community: "Join the community",
        },
      },
      ge: {
        translation: {
          h1: "კიდევ ერთი მეგობარი",
          h2: "ათასობით გასართობი!",
          p: "შინაური ცხოველის ყოლა ნიშნავს, რომ გქონდეს მეტი სიხარული, ახალი მეგობარი, ბედნიერი ადამიანი, რომელიც ყოველთვის შენთან იქნება გასართობად. ჩვენ გვყავს 200+ სხვადასხვა შინაური ცხოველი, რომლებიც დააკმაყოფილებენ თქვენს საჭიროებებს!",
          btn1: "ინტრო",
          btn2: "მეტის ნახვა",
          home: "მთავარი",
          category: "კატეგორია",
          contact: "საკონტაქტო",
          community: "შეუერთი ჯგუფს",
        },
      },
    },
  });

export default i18n;
