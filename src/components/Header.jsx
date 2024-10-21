import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";

function Header() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  // const { userName } = useContext(UserContext);
  const { userName, setUserName } = useContext(UserContext);

  //mobile nav
  function toggleMobileNav() {
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileNavWrapper = document.querySelector(".mobile-nav-wrapper");

    mobileNav.classList.toggle("active");
    mobileNavWrapper.classList.toggle("active");
  }

  function toggleCloseClick() {
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileNavWrapper = document.querySelector(".mobile-nav-wrapper");

    mobileNav.classList.remove("active");
    mobileNavWrapper.classList.remove("active");
  }

  // function toggleMobileUser() {
  //   const userDropDown = document.querySelector(".user-dropdown-wrapper");

  //   userDropDown.classList.toggle("active");
  //   mobileNavWrapper.classList.toggle("active");
  // }

  //language dropdown
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isUserDropdownVisible, setUserDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "USA",
    flag: "/usa-flag.svg",
  });

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleUserDropdown = () => {
    setUserDropdownVisible(!isUserDropdownVisible);
  };

  const handleLanguageSelect = (language, flag) => {
    setSelectedLanguage({ name: language, flag });
    i18n.changeLanguage(language.toLowerCase());
    setDropdownVisible(false);
  };

  //language transition
  const { t } = useTranslation();

  //logout
  const handleLogout = () => {
    setUserName(null);
    localStorage.removeItem("userName");
    window.location.reload();
  };

  return (
    <>
      <header className="desktop-header">
        <div className="header-left-section">
          <Link to="/home">
            <img src="/logo.svg" alt="logo" />{" "}
          </Link>
          <nav className="Desktop-nav">
            <ul>
              <li>
                <Link to="/home">{t("home")}</Link>
              </li>
              <li>
                <Link to="/category">{t("category")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("contact")}</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right-section">
          {!userName && (
            <button
              className="join-community"
              onClick={() => navigate("/registration")}
            >
              {t("community")}
            </button>
          )}

          <div className="user-dropdown-div" onClick={toggleUserDropdown}>
            <h1>{userName}</h1>
            {isUserDropdownVisible && (
              <div className="user-dropdown">
                <div className="user-dropdown-option">
                  <img src="/user-logo.svg" alt="user-logo" />
                  <p>Profile</p>
                </div>
                <div className="user-dropdown-option " onClick={handleLogout}>
                  <img src="/log-out.svg" alt="log-out" />
                  <p>Log out</p>
                </div>
              </div>
            )}
          </div>
          <div className="language-div" onClick={toggleDropdown}>
            <img
              src={selectedLanguage.flag}
              alt="flag"
              className="country-flag"
            />
            <p>{selectedLanguage.name}</p>
            <img src="/arrow-icon.svg" alt="arrow" />

            {isDropdownVisible && (
              <div className="language-dropdown">
                <div
                  className="language-option"
                  onClick={() => handleLanguageSelect("USA", "/usa-flag.svg")}
                >
                  <img
                    src="/usa-flag.svg"
                    alt="flag"
                    className="country-flag"
                  />
                  <p>USA</p>
                </div>
                <div
                  className="language-option"
                  onClick={() =>
                    handleLanguageSelect("GE", "/georgia-flag.svg")
                  }
                >
                  <img
                    src="/georgia-flag.svg"
                    alt="flag"
                    className="country-flag"
                  />
                  <p>GE</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <header className="mobile-header">
        <div className="mobile-header-intro">
          <Link to="/home">
            <img src="/logo.svg" alt="logo" />
          </Link>
          <img
            src="/Hamburger-icon.svg"
            alt="Hamburger-icon"
            onClick={toggleMobileNav}
          />
        </div>
        <nav className="mobile-nav">
          <div className="mobile-nav-overlay"></div>
          <div className="mobile-nav-wrapper">
            <img
              src="/close-icon.svg"
              alt="close-icon"
              className="nav-close-icon"
              onClick={toggleCloseClick}
            />
            <div className="mobile-nav-details">
              <ul>
                <li>
                  <Link to="/home">{t("home")}</Link>
                </li>

                <li>
                  <Link to="/category">{t("category")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("contact")}</Link>
                </li>
              </ul>
              {!userName && (
                <button
                  className="join-community"
                  onClick={() => navigate("/registration")}
                >
                  {t("community")}
                </button>
              )}

              <div className="user-dropdown-div" onClick={toggleUserDropdown}>
                <h1>{userName}</h1>
                {isUserDropdownVisible && (
                  <div className="user-dropdown">
                    <div className="user-dropdown-option">
                      <img src="/user-logo.svg" alt="user-logo" />
                      <p>Profile</p>
                    </div>
                    <div
                      className="user-dropdown-option "
                      onClick={handleLogout}
                    >
                      <img src="/log-out.svg" alt="log-out" />
                      <p>Log out</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="language-div" onClick={toggleDropdown}>
                <img
                  src={selectedLanguage.flag}
                  alt="flag"
                  className="country-flag"
                />
                <p>{selectedLanguage.name}</p>
                <img src="/arrow-icon.svg" alt="arrow" />

                {isDropdownVisible && (
                  <div className="language-dropdown">
                    <div
                      className="language-option"
                      onClick={() =>
                        handleLanguageSelect("USA", "/usa-flag.svg")
                      }
                    >
                      <img
                        src="/usa-flag.svg"
                        alt="flag"
                        className="country-flag"
                      />
                      <p>USA</p>
                    </div>
                    <div
                      className="language-option"
                      onClick={() =>
                        handleLanguageSelect("GE", "/georgia-flag.svg")
                      }
                    >
                      <img
                        src="/georgia-flag.svg"
                        alt="flag"
                        className="country-flag"
                      />
                      <p>GE</p>
                    </div>
                  </div>
                )}
              </div>
              <img src="/logo.svg" alt="logo" className="mobile-nav-logo" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
