import React from "react";
import Nav from "../Nav/Nav";
import "./ProfileScreen_Style/ProfileScreen.css";
import avatar from "../../Photos/Netflix-avatar.png";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import PlansScreen from "../PlansScreen/PlansScreen";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={avatar} alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
