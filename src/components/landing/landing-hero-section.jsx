import Header from "../Header";
import { useTranslation } from "react-i18next";

const LandingHeroSection = () => {
  // language transition
  const { t } = useTranslation();

  return (
    <section className="landing-first-section">
      <Header></Header>
      <div className="hero-section">
        <div className="hero-info">
          <h1>{t("h1")}</h1>
          <h2>{t("h2")}</h2>
          <p>{t("p")}</p>
          <div className="hero-btns">
            <button className="btn btn-first">
              {t("btn1")}
              <img src="../../public/play-circle.svg" alt="play-circle" />
            </button>
            <button className="btn btn-second">{t("btn2")}</button>
          </div>
        </div>
        <div className="hero-img">
          <img src="../../public/hero-image.png" alt="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default LandingHeroSection;
