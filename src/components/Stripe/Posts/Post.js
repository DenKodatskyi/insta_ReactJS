import React, { Component } from "react";
import User from "../Users/User";
import Mechanicus from "../../../assets/img/Mechanicus.jpg";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User src={Mechanicus} alt="TomMechanicus" name="Mechanicus" min />
        <img src={this.props.src} alt={this.props.alt}></img>

        <div className="post_name">
          some account
        </div>

        <div className="Post_descr">
          Create React App не обрабатывает бэкенд логику или базы данных, он только предоставляет команды для сборки фронтенда, поэтому вы можете использовать его с любым бэкэндом. «Под капотом» используются Babel и webpack, но вам не нужно ничего знать о них.
        </div>
      </div>
    )
  }
}

