import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: string().min(4),
  email: string().email(),
  phone: string().min(10),
});

const Contact = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const handleSave = () => {
    navigate("/home");
  };

  return (
    <>
      <Header />
      <section className="contact-section">
        <form className="contact-form" onSubmit={handleSubmit(handleSave)}>
          <h2>
            Get in <span>Touch</span>
          </h2>
          <p>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <div className="contact-input-div">
            <input {...register("name")} type="text" placeholder="Name" />
            <p className="error-p">{errors.name?.message}</p>
          </div>

          <div className="contact-input-div">
            <input {...register("email")} type="text" placeholder="Email" />
            <p className="error-p">{errors.email?.message}</p>
          </div>
          <div className="contact-input-div">
            <input
              {...register("phone")}
              type="text"
              placeholder="Phone number"
            />
            <p className="error-p">{errors.phone?.message}</p>
          </div>
          <div className="contact-dropdown">
            <select name="subject" id="subject" className="cotact-selection">
              <option value="" disabled selected hidden>
                how did you find us?
              </option>
              <option value="feedback">Feedback</option>
              <option value="support">Support</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button className="contact-button" type="submit">
            SEND
          </button>
          <div className="contact-more-info">
            <div className="contact-more-info-div">
              <img src="/contact-page/contact-phone.svg" alt="phone" />
              <div className="contact-info">
                <h4>PHONE</h4>
                <p>111 111 111</p>
              </div>
            </div>
            <div className="contact-more-info-div">
              <img src="/contact-page/contact-fax.svg" alt="phone" />
              <div className="contact-info">
                <h4>FAX</h4>
                <p>111 111 111</p>
              </div>
            </div>
            <div className="contact-more-info-div">
              <img src="/contact-page/contact-email.svg" alt="phone" />
              <div className="contact-info">
                <h4>EMAIL</h4>
                <p>info@gmail.com</p>
              </div>
            </div>
          </div>
        </form>
        <div className="contact-map">
          <img src="/contact-page/contact-map.png" alt="map" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
