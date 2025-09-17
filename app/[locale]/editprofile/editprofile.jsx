"use client";
import React, { useState, useEffect } from "react";
import ApiClient from "@/Services/APIs";
import "./editprofile.css";
const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await ApiClient.get("merchant/me");
        if (res?.data) {
          setProfileData({
            name: res.data.name || "",
            email: res.data.email || "",
            phone: res.data.phone || "",
            company: res.data.company || "",
            address: res.data.address || "",
          });
        }
      } catch (err) {
        console.error("❌ Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSaveClick = async () => {
    try {
      const res = await ApiClient.post("merchant/profile", profileData); // لو محتاج PUT بدال POST عدلي هنا
      console.log("✅ Profile updated:", res);
      setIsEditing(false);
      alert("تم حفظ التغييرات بنجاح!");
    } catch (err) {
      console.error("❌ Error updating profile:", err);
      alert("حصل خطأ أثناء حفظ التغييرات");
    }
  };

  return (
    <div className="editprofile-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="editprofile-content">
          <div className="profile-section">
            <div className="profile-header">
              <h2>{profileData.name}</h2>
              <p>{profileData.email}</p>
              <button
                className={isEditing ? "save-btn" : "edit-btn"}
                onClick={isEditing ? handleSaveClick : () => setIsEditing(true)}
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={profileData.company}
                  onChange={(e) =>
                    setProfileData({ ...profileData, company: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={(e) =>
                    setProfileData({ ...profileData, address: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
            </div>

            {isEditing && (
              <div className="action-buttons">
                <button
                  className="cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
