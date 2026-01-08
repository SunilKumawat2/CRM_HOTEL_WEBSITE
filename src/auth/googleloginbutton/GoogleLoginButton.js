import { GoogleLogin } from "@react-oauth/google";
import { User_Google_Login } from "../../api/auth/Auth"; // your global API function

const GoogleLoginButton = () => {
  const handleSuccess = async (credentialResponse) => {
    console.log("credentialResponse:", credentialResponse); // 🔹 Debugging

    const idToken = credentialResponse.credential; // ✅ ID token

    try {
      // Call your global API function
      const res = await User_Google_Login({ idToken });

      console.log("Login Success:", res.data);

      // Save JWT
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.error("Login Failed:", error.response?.data || error.message);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log("Google Login Failed")}
      size="large"
      theme="outline"
      text="signin_with"
    />
  );
};

export default GoogleLoginButton;
