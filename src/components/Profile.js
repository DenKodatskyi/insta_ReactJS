import React from 'react';
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
  return (
    <div className="container profile">
      <User 
        src="http://www.millenniumgames.com/wp-content/uploads/2018/07/Skitarii-Adeptus-Mechanicus-Wal-Hor.jpg" alt="Mechanicus" 
        name="Mechanicus"/>
      <Palette />
    </div>
  )
}

export default Profile;