import React from 'react';
import User from "../Stripe/Users/User";
import Palette from "./Palette";
import Mechanicus from "../../assets/img/Mechanicus.jpg";

const Profile = () => {
  return (
    <div className="container profile">
      <User src={Mechanicus} alt="Mechanicus" name="Mechanicus" />
      <Palette />
    </div>
  )
}

export default Profile;