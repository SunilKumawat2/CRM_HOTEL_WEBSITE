import React, { useState, useRef } from "react";
import axios from "axios";
import "../../auth/Auth.css"; // import the styles
import GoogleLoginButton from "../googleloginbutton/GoogleLoginButton";

const Login = () => {
  const [step, setStep] = useState(1);
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const otpRefs = useRef([]);

  // Send OTP
  const handleSendOtp = async () => {
    if (!identifier) {
      setMessage("Please enter email or phone number");
      return;
    }

    setLoading(true);
    setMessage("");

    const isEmail = identifier.includes("@");

    try {
      if (isEmail) {
        const res = await axios.post("http://localhost:4005/crm/api/user-send-otp", { email: identifier });
        setMessage(res.data.message);
        setStep(2);
      } else {
        let phone = identifier.replace(/[\s-]/g, "");
        if (!phone.startsWith("+")) phone = "+91" + phone;

        const auth = window.firebaseAuth;
        const RecaptchaVerifier = window.RecaptchaVerifier;
        const signInWithPhoneNumber = window.signInWithPhoneNumber;

        if (!auth) throw new Error("Firebase Auth not initialized");

        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", { size: "invisible" });
        }

        const appVerifier = window.recaptchaVerifier;
        const confirmation = await signInWithPhoneNumber(auth, phone, appVerifier);

        setConfirmationResult(confirmation);
        setMessage("OTP sent to your phone number");
        setStep(2);
      }
    } catch (err) {
      console.error("OTP Error:", err);
      setMessage("Error sending OTP");
    }

    setLoading(false);
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      setMessage("Please enter 6-digit OTP");
      return;
    }

    setLoading(true);
    setMessage("");

    const isEmail = identifier.includes("@");

    try {
      if (isEmail) {
        const res = await axios.post("http://localhost:4005/crm/api/user-otp-verify", { email: identifier, otp: otpCode });
        localStorage.setItem("token", res.data.data.token);
        setMessage("Login successful");
      } else if (confirmationResult) {
        const result = await confirmationResult.confirm(otpCode);
        const idToken = await result.user.getIdToken();

        const res = await axios.post("http://localhost:4005/crm/api/user-otp-verify", {
          phone: identifier.startsWith("+") ? identifier : `+91${identifier}`,
          firebaseToken: idToken,
        });

        localStorage.setItem("token", res.data.data.token);
        setMessage("Login successful");
      }

      setStep(1);
      setIdentifier("");
      setOtp(new Array(6).fill(""));
    } catch (err) {
      console.error("Verify Error:", err);
      setMessage("OTP verification failed");
    }

    setLoading(false);
  };

  // Handle OTP input change
  const handleOtpChange = (e, index) => {
    const val = e.target.value;
    if (/[^0-9]/.test(val)) return;

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // Move focus
    if (val && index < 5) otpRefs.current[index + 1].focus();
    if (!val && index > 0) otpRefs.current[index - 1].focus();
  };

  return (
    <div className="login-page">
      <div className="glass-container">
        <h2 className="login-title">{step === 1 ? "Login / Register" : "Verify OTP"}</h2>

        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Enter email or phone (+91...)"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="login-input"
            />
            <div id="recaptcha-container"></div>
            <button className="login-btn" onClick={handleSendOtp} disabled={loading}>
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
            
            <GoogleLoginButton />
          </>
        )}

        {step === 2 && (
          <>
            <p className="otp-instruction">Enter the 6-digit OTP sent to {identifier}</p>
            <div className="otp-container">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength="1"
                  value={digit}
                  ref={(el) => (otpRefs.current[idx] = el)}
                  onChange={(e) => handleOtpChange(e, idx)}
                  className="otp-input"
                />
              ))}
            </div>
            <button className="login-btn" onClick={handleVerifyOtp} disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {message && <div className="login-message">{message}</div>}
      </div>
    </div>
  );
};

export default Login;
