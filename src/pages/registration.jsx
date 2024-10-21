import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: string().min(3).optional(),
  email: string().email(),
  password: string().min(6),
  confirmPassword: string().min(6).optional(),
});

const Registration = () => {
  const [action, setAction] = useState("sign-in");
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleActionChange = (newAction) => {
    setAction(newAction);
    reset();
  };

  const handleSave = (data) => {
    if (action === "sign-up") {
      const { name, email, password } = data;

      const userData = { name, email, password };
      localStorage.setItem(email, JSON.stringify(userData));
      console.log(userData);
      alert("Account created successfully!");
      setAction("sign-in");
    } else if (action === "sign-in") {
      const { email, password } = data;

      const storedUser = localStorage.getItem(email);

      if (storedUser) {
        const userData = JSON.parse(storedUser);

        if (userData.password === password) {
          setUserName(userData.name);
          localStorage.setItem("userName", userData.name);
          navigate("/home");
        } else {
          alert("Incorrect password! Please try again.");
        }
      } else {
        alert("User not found! Please sign up first.");
      }
    }
  };

  const { errors } = formState;

  const renderForm = () => {
    switch (action) {
      case "sign-in":
        return (
          <>
            <div className="google-div">
              <img src="/google-icon.svg" alt="google-icon" />
              <p>Continue with Google</p>
            </div>
            <div className="line-breaker">
              <span>OR</span>
            </div>
            <div className="input-div">
              <label>Email</label>
              <input {...register("email")} type="text" />
              <p className="error-p">{errors.email?.message}</p>
            </div>
            <div className="input-div">
              <label>Password</label>
              <input {...register("password")} type="password" />
              <p className="error-p">{errors.password?.message}</p>
            </div>
            <p
              className="forgot-password"
              onClick={() => handleActionChange("forgot-password")}
            >
              Forgot Password?
            </p>
            <button type="submit" className="form-button">
              Login
            </button>
            <p
              className="sign-up-p"
              onClick={() => handleActionChange("sign-up")}
            >
              Don't have an account? Sign up
            </p>
          </>
        );
      case "sign-up":
        return (
          <>
            <div className="input-div">
              <label>Name</label>
              <input {...register("name")} type="text" />
              <p className="error-p">{errors.name?.message}</p>
            </div>
            <div className="input-div">
              <label>Email</label>
              <input {...register("email")} type="text" />
              <p className="error-p">{errors.email?.message}</p>
            </div>
            <div className="input-div">
              <label>Password</label>
              <input {...register("password")} type="password" />
              <p className="error-p">{errors.password?.message}</p>
            </div>
            <p className="sign-up-text">
              By creating an account you agree with our Terms of Service,
              Privacy Policy.
            </p>
            <button type="submit" className="form-button">
              Create account
            </button>
            <p
              className="sign-in-p"
              onClick={() => handleActionChange("sign-in")}
            >
              Already have an account? Log in
            </p>
          </>
        );
      case "forgot-password":
        return (
          <>
            <p className="forgot-password-intro">
              Please enter the email address associated with your account. We'll
              promptly send you a link to reset your password.
            </p>
            <div className="input-div">
              <label>Email</label>
              <input {...register("email")} type="text" />
              <p className="error-p">{errors.email?.message}</p>
            </div>
            <div
              className="form-button"
              onClick={() => handleActionChange("reset-password")}
            >
              Send reset link
            </div>
            <p
              className="sign-in-p"
              onClick={() => handleActionChange("sign-in")}
            >
              Back to Login
            </p>
          </>
        );
      case "reset-password":
        return (
          <>
            <div className="input-div">
              <label>New password</label>
              <input {...register("password")} type="password" />
              <p className="error-p">{errors.password?.message}</p>
            </div>
            <div className="input-div">
              <label>Confirm password</label>
              <input {...register("confirmPassword")} type="password" />
              <p className="error-p">{errors.confirmPassword?.message}</p>
            </div>
            <button className="form-button">Reset password</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <Header />
        <form className="registration-form" onSubmit={handleSubmit(handleSave)}>
          {renderForm()}
        </form>
        <Footer />
      </div>
    </>
  );
};

export default Registration;
