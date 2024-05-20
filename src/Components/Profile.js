import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./profile.css";
import Default from "../imgs/default.png";
import USER from "../imgs/user.png";
import contact from "../imgs/contact.png";
import LowerNav from "./LowerNav";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [image, setImage] = useState(Default);
  const navigate = useNavigate();

  document.title = "Profile section";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ height: "70vh" }} className="profile-section">
        <div className="account-section animate">
          <div className="top-section">
            <p className="welcome-mssg">Welcome, User</p>
          </div>
          <div className="account-section2">
            <div className="left-account-section">
              <img src={image} className="profile-img" alt="" />
              <p className="profile-name">Name</p>
              <p className="profile-email">user@emial.com</p>
              <button className="signout-btn">Sign out</button>
            </div>
            <div className="right-account-section">
              <p className="personal-info-head">Personal Information</p>
              <p className="personal-info-desc">
                Manage your personal information, including your contact
                details.
              </p>
              <div className="personal-user-data">
                <div className="personal-name">
                  <div className="name-section">
                    <p className="name-data">Name</p>
                    <img src={USER} className="user-photo" alt="" />
                  </div>
                  <p className="users-name">User-Name</p>
                </div>
                <div className="personal-mail">
                  <div className="mail-section">
                    <p className="mail-data">Contact</p>
                    <img src={contact} className="mail-photo" alt="" />
                  </div>
                  <p className="users-mail">+12,987456123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerNav">
        <LowerNav />
      </div>
      <Footer />
    </>
  );
}

export default Profile;
