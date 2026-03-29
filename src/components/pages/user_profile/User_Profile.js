import React, { useEffect, useState } from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { get_user_profile } from "../../../api/auth/Auth";
import { Update_User_Profile } from "../../../api/auth/Auth";
import { IMG_BASE_URL } from "../../../config/Config";

const User_Profile = () => {
  const [profile, setProfile] = useState(null);
  console.log("setProfile_setProfile", profile);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    phone: "",
    alternative_number: "",
    address: "",
    pin_code: "",
    bio: "",
    profileImage: null,
  });

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await get_user_profile();
        if (response.status == 200) {
          const data = response.data.data;
          setProfile(data);
          setFormData({
            phone: data.phone || "",
            alternative_number: data.alternative_number || "",
            address: data.address || "",
            pin_code: data.pin_code || "",
            bio: data.bio || "",
            profileImage: null,
          });
        } else {
          setError("Failed to fetch profile");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      // Set selected image file
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const payload = new FormData();

      payload.append("phone", formData.phone);
      payload.append("alternative_number", formData.alternative_number);
      payload.append("address", formData.address);
      payload.append("pin_code", formData.pin_code);
      payload.append("bio", formData.bio);

      if (formData.profileImage) {
        payload.append("profileImage", formData.profileImage); // 🔹 this sends the file
      }

      const token = localStorage.getItem("user_token");
      const response = await Update_User_Profile(payload, token);

      if (response.status === 200) {
        setProfile(response.data.data);
        setSuccess("Profile updated successfully!");
        setFormData((prev) => ({ ...prev, profileImage: null })); // reset file input
      }
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <div>
      <Header />

      <div className="container my-5">
        {loading ? (
          <p>Loading profile...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : profile ? (
          <div className="col-lg-12 col-md-12">
            <div className="card shadow-sm p-4">
              <h2 className="text-center mb-4">Update Profile</h2>

              <form onSubmit={handleSubmit}>
                {/* ----------------- First Row: 3 Columns ----------------- */}
                <div className="row g-4 mb-3">
                  {/* Profile Image */}
                  <div className="col-md-4 text-center">
                    <img
                      src={
                        formData.profileImage
                          ? URL.createObjectURL(formData.profileImage) // preview selected image
                          : profile.profileImage
                            ? `${IMG_BASE_URL}${profile.profileImage}` // backend image
                            : "/default-user.png"
                      }
                      alt="Profile"
                      className="rounded-circle border mb-3"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <input
                      type="file"
                      className="form-control mt-2"
                      name="profileImage"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-md-4">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Alternative Number */}
                  <div className="col-md-4">
                    <label htmlFor="alternative_number" className="form-label">
                      Alternative Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="alternative_number"
                      name="alternative_number"
                      value={formData.alternative_number}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* ----------------- Second Row: 2 Columns with first empty ----------------- */}
                <div className="row g-4 mb-3">
                  <div className="col-md-4"></div> {/* Empty Column */}
                  <div className="col-md-4">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="pin_code" className="form-label">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pin_code"
                      name="pin_code"
                      value={formData.pin_code}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* ----------------- Third Row: Bio (first column empty, next 2 columns) ----------------- */}
                <div className="row g-4 mb-3">
                  <div className="col-md-4"></div> {/* Empty Column */}
                  <div className="col-md-8">
                    <label htmlFor="bio" className="form-label">
                      Bio
                    </label>
                    <textarea
                      className="form-control"
                      id="bio"
                      name="bio"
                      rows="3"
                      value={formData.bio}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Update Profile
                </button>

                {success && (
                  <div className="alert alert-success mt-3">{success}</div>
                )}
                {error && (
                  <div className="alert alert-danger mt-3">{error}</div>
                )}
              </form>
            </div>
          </div>
        ) : (
          <p>No profile data available</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default User_Profile;
