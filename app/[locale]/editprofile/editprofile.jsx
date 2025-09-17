"use client";


import React, { useState } from 'react';
import './editprofile.css';

const EditProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Last Name",
    firstName: "Last Name",
    phone: "Email",
    yourPhone: "Your Email",
    password: "Confirm Password",
    company: "Your Company"
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  
    alert('تم حفظ التغييرات بنجاح!');
  };

  return (
    <div className="editprofile-container" >
    

      <div className="editprofile-content" >
  
        
        <div className="profile-section">
          <div className="profile-header">
            <h2>Alexa Rawles</h2>
            <p>alexarawles@gmail.com</p>
            <button 
              className={isEditing ? "save-btn" : "edit-btn"} 
              onClick={isEditing ? handleSaveClick : handleEditClick}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="fullName"
                value={profileData.fullName} 
                onChange={handleInputChange}
                disabled={!isEditing}
                className={isEditing ? "editable" : ""}
              />
            </div>
            
            <div className="form-group">
              <label>Your First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={profileData.firstName} 
                onChange={handleInputChange}
                disabled={!isEditing}
                className={isEditing ? "editable" : ""}
              />
            </div>
            
            <div className="form-group">
              <label>Phone</label>
              <input 
                type="text" 
                name="phone"
                value={profileData.phone} 
                onChange={handleInputChange}
                disabled={!isEditing}
                className={isEditing ? "editable" : ""}
              />
            </div>
            
            <div className="form-group">
              <label>Your Phone</label>
              <input 
                type="text" 
                name="yourPhone"
                value={profileData.yourPhone} 
                onChange={handleInputChange}
                disabled={!isEditing}
                className={isEditing ? "editable" : ""}
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password"
                value={profileData.password} 
                onChange={handleInputChange}
                disabled={!isEditing}
                className={isEditing ? "editable" : ""}
              />
            </div>
          </div>

          <div className="company-section">
            <label>Company</label>
            <input 
              type="text" 
              name="company"
              value={profileData.company} 
              onChange={handleInputChange}
              disabled={!isEditing}
              className={isEditing ? "editable" : ""}
            />
          </div>

          {isEditing && (
            <div className="action-buttons">
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;