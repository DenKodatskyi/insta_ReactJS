import React from "react";
import User from "./User";
import Mechanicus from '../../../assets/img/Mechanicus.jpg';
import { Link } from "react-router-dom";


const Users = () => {
  return (
    <div className="right">

      <Link className="logo" to="/profile">
        <User src={Mechanicus} alt="TomMechanicus" name="Mechanicus" />
      </Link>

      <div className="users_block">
        <User src={Mechanicus} alt="TomMechanicus" name="Mechanicus" min />

        <User src={Mechanicus} alt="TomMechanicus" name="Mechanicus" min />

        <User src={Mechanicus} alt="TomMechanicus" name="Mechanicus" min />

        <User src={Mechanicus} alt="TomMechanicus" name="Mechanicus" min />
      </div>

    </div>
  )
}


export default Users