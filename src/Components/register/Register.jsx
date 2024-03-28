import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "./logobg.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="registerPage">
      <div className="registerPage-top">
        <img
          src={Logo}
          alt="logo"
          width={100}
          height={24}
          className="registerPage-logo"
        />

        <Link to={"/login"} className="loginPage-btn">
          Login
        </Link>
      </div>

      <div className="registerPage-bottom" style={{ display: "none" }}>
        <p className="top-1">GrowthX is built to create the top 1% leaders</p>

        <p className="few-questions">
          We'll now ask you a few questions (~15 secs). This will give you
          clarity on if GrowthX is the right fit for your professional goals.
          This application process has helped us find our first 2,500+ members
          from ~25,000 applications in the last 3 years.
        </p>

        <button className="">Let's do this</button>
      </div>

      {/* Page 1 */}
      <form
        className="registerPage-bottom"
        style={{ alignItems: "flex-start", rowGap: "30px", display: "none" }}
      >
        <div className="register-form-div">
          <p className="form-question">
            What describes your current Role? <sup>*</sup>
          </p>

          <div className="form-options-div">
            <label for="Manager" className="register-form-label">
              <span className="form-radio">
                <input name="role" id="Manager" type="radio" value="Manager" />
              </span>
              <span className="form-title">Manager</span>
            </label>
            <label for="Employee" className="register-form-label">
              <span className="form-radio">
                <input
                  name="role"
                  id="Employee"
                  type="radio"
                  value="Employee"
                />
              </span>
              <span className="form-title">Employee</span>
            </label>
            <label for="Intern" className="register-form-label">
              <span className="form-radio">
                <input name="role" id="Intern" type="radio" value="Intern" />
              </span>
              <span className="form-title">Intern</span>
            </label>
          </div>
        </div>

        <div>
          <button className="register-form-btn">Next</button>

          <span className="register-form-btn-span">Press Enter ↵</span>
        </div>
      </form>

      {/* Page 2 */}
      <form
        className="registerPage-bottom"
        style={{ alignItems: "flex-start", rowGap: "30px", display: "none" }}
      >
        <div className="register-form-div">
          <div>
            <p className="form-question">
              What is your first name? <sup>*</sup>
            </p>
          </div>

          <div
            className="form-options-div"
            style={{ alignItems: "flex-start" }}
          >
            <label for="firstName" className="register-form-label email-label">
              <span className="" style={{ width: "100%" }}>
                <input
                  name="firstName"
                  type="text"
                  // value="email"
                  placeholder="For example, Suraj"
                  className="email-input"
                />
              </span>
            </label>
          </div>
        </div>

        <div>
          <button className="register-form-btn">Next</button>
          <span className="register-form-btn-span">Press Enter ↵</span>
        </div>
      </form>

      {/* Page 3 */}
      <form
        className="registerPage-bottom"
        style={{ alignItems: "flex-start", rowGap: "30px", display: "none" }}
      >
        <div className="register-form-div">
          <div>
            <p className="form-question">
              What is your last name? <sup>*</sup>
            </p>
          </div>

          <div
            className="form-options-div"
            style={{ alignItems: "flex-start" }}
          >
            <label for="lastName" className="register-form-label email-label">
              <span className="" style={{ width: "100%" }}>
                <input
                  name="lastName"
                  type="text"
                  // value="email"
                  placeholder="For example, Singh"
                  className="email-input"
                />
              </span>
            </label>
          </div>
        </div>

        <div>
          <button className="register-form-btn">Next</button>
          <span className="register-form-btn-span">Press Enter ↵</span>
        </div>
      </form>

      {/* Page 4 */}
      <form
        className="registerPage-bottom"
        style={{ alignItems: "flex-start", rowGap: "30px", display: "none" }}
      >
        <div className="register-form-div">
          <div className="" style={{ marginBottom: "16px" }}>
            <p className="form-question">
              Your primary email address? <sup>*</sup>
            </p>
            <p className="option-question">
              Pick an email that you check everyday.
            </p>
          </div>

          <div
            className="form-options-div"
            style={{ alignItems: "flex-start" }}
          >
            <label for="email" className="register-form-label email-label">
              <span className="" style={{ width: "100%" }}>
                <input
                  name="email"
                  type="email"
                  // value="email"
                  placeholder="For example, example@gmail.com"
                  className="email-input"
                />
              </span>
            </label>
          </div>
        </div>

        <div>
          <button className="register-form-btn">Next</button>

          <span className="register-form-btn-span">Press Enter ↵</span>
        </div>
      </form>

      {/* Page 5 */}
      <form
        className="registerPage-bottom"
        style={{ alignItems: "flex-start", rowGap: "30px", display: "none" }}
      >
        <div className="register-form-div">
          <div className="" style={{ marginBottom: "16px" }}>
            <p className="form-question">
              Enter a new password <sup>*</sup>
            </p>
            <p className="option-question">
              Pick a strong password for security.
            </p>
          </div>

          <div
            className="form-options-div"
            style={{ alignItems: "flex-start" }}
          >
            <label for="password" className="register-form-label email-label">
              <span
                className=""
                style={{ width: "100%", position: "relative" }}
              >
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  // value="email"
                  placeholder="password"
                  className="email-input"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="register-form-password-span"
                >
                  {showPassword ? (
                    <IoEyeOff fontSize={20} fill="#ffffff" />
                  ) : (
                    <IoEye fontSize={20} fill="#ffffff" />
                  )}
                </span>
              </span>
            </label>
          </div>
        </div>
        <div>
          <label for="terms" className="register-terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={isChecked}
              onChange={handleChange}
            />
            <span>I agree to the user terms and conditions</span>
          </label>
        </div>

        <div>
          <button className="register-form-btn" disabled={!isChecked}>
            Next
          </button>

          <span className="register-form-btn-span">Press Enter ↵</span>
        </div>
      </form>

      {/* Page 6 */}
      <form
        className="registerPage-bottom"
        style={{ alignItems: "flex-start", rowGap: "30px" }}
      >
        <div className="register-form-div">
          <div className="" style={{ marginBottom: "16px" }}>
            <p className="form-question otp">Enter OTP</p>
            <p className="option-question otp">
              Haven't received OTP? Click to resend
            </p>
          </div>

          <div
            className="form-options-div"
            style={{ alignItems: "flex-start" }}
          >
            <label for="otp" className="register-form-label email-label">
              <span className="" style={{ width: "100%" }}>
                <input
                  name="otp"
                  type="number"
                  // value="email"
                  placeholder="123456"
                  className="email-input"
                />
              </span>
            </label>
          </div>
        </div>

        <div>
          <button className="register-form-btn">Register</button>

          <span className="register-form-btn-span">Press Enter ↵</span>
        </div>
      </form>
    </div>
  );
};

export default Register;
