import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const detailsDogs = ({ dog }) => {
  const navigate = useNavigate();

  const { userName, setUserName } = useContext(UserContext);

  function userConsole() {
    if (userName) {
      navigate("/chat", { state: { dog } });
    } else {
      alert("Please login to continue");
    }
  }

  const handleNavigate = () => {
    navigate("/category");
  };
  return (
    <>
      <section className="dog-details-section">
        <div className="dog-img">
          <img
            src="../../../public/details-page/arrow-left-details.svg"
            className="arrow-left-img"
            onClick={handleNavigate}
          />
          <img src={dog.img} alt={dog.name} className="dog-img" />
          <div className="dog-guarantee invisible">
            <p>
              <img src="../../../public/details-page/guarantee 1.svg" />
              100% health guarantee for pets
            </p>
            <p>
              <img src="../../../public/details-page/guarantee 2.svg" />
              100% guarantee of pet identification
            </p>
          </div>
          <div className="dog-share">
            <img src="../../../public/details-page/share-icon.svg" />
            <p>Share:</p>
            <img src="../../../public/details-page/Facebook - Negative.svg" />
            <img src="../../../public/details-page/Twitter - Negative.svg" />
            <img src="../../../public/details-page/YouTube - Negative.svg" />
            <img src="../../../public/details-page/Instagram - Negative.svg" />
          </div>
        </div>
        <div className="dog-data">
          <div className="current-page">
            <p>Home</p>
            <img src="../../../public/details-page/arrow-right-details.svg" />
            <p>Dog</p>
            <img src="../../../public/details-page/arrow-right-details.svg" />
            <p>Large Dog</p>
            <img src="../../../public/details-page/arrow-right-details.svg" />
            <p>{dog.name}</p>
          </div>
          <div className="dog-main-info">
            <h4>{dog.SKU}</h4>
            <h2>{dog.name}</h2>
            <p>{dog.price}</p>
          </div>
          <div className="dog-contact">
            <button className="first-btn">Contact us</button>
            <button className="second-btn" onClick={userConsole}>
              <img src="../../../public/details-page/chat-icon.svg" />
              chat with Monito
            </button>
          </div>
          <div className="dog-secondary-info">
            <div className="secondary-information-div">
              <h2>Information</h2>
              <div className="infro-wrapper">
                <img src="../../../public/details-page/share-icon.svg" />
                <p>Share:</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">SKU</p>
                <p className="value">:{dog.SKU}</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">Gender</p>
                <p className="value">:{dog.gene}</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">Age</p>
                <p className="value">:{dog.age}</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">Size</p>
                <p className="value">:{dog.breed}</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">Color</p>
                <p className="value">:{dog.color}</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">Vaccinated</p>
                <p className="value">:{dog.vaccinated}</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">Dewormed</p>
                <p className="value">:{dog.dewormed}</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">Cert</p>
                <p className="value">:{dog.cert}</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">Microchip</p>
                <p className="value">:{dog.microchip}</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">Location</p>
                <p className="value">:{dog.location}</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">Published Date</p>
                <p className="value">:{dog.published_date}</p>
              </div>
            </div>
            <div className="dog-secondary-info-div">
              <div className="dog-secondary-info-wrapper">
                <p className="label">Additional Information</p>
                <p className="value">:{dog.additional_information}</p>
              </div>
            </div>
          </div>
          <div className="dog-guarantee">
            <p>
              <img src="../../../public/details-page/guarantee 1.svg" />
              100% health guarantee for pets
            </p>
            <p>
              <img src="../../../public/details-page/guarantee 2.svg" />
              100% guarantee of pet identification
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default detailsDogs;
