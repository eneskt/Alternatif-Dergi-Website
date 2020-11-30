import React from "react";
import Logo from "../images/logo.svg";
import "./style/What.css";
import { AiFillInstagram, AiFillMail, AiOutlineSend } from "react-icons/ai";

function What() {
  return (
    <div className="card">
      <div className="card-photo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="card-body">
        <div className="card-links">
          <AiFillInstagram />
          <AiFillMail />
          <AiOutlineSend />
        </div>
        <div className="card-details">
          <p>
            lorem sadasd asdasda dsadadsadsadas sadasdasdsadas dsadasdadadsa
            asdasdasdadadasdlorem sadasd asdasda dsadadsadsadas sadasdasdsadas
            dsadasdadadsa asdasdasdadadasdlorem sadasd asdasda dsadadsadsadas
            sadasdasdsadas dsadasdadadsa asdasdasdadadasdlorem sadasd asdasda
            dsadadsadsadas sadasdasdsadas dsadasdadadsa asdasdasdadadasdlorem
            sadasd asdasda dsadadsadsadas sadasdasdsadas dsadasdadadsa
            asdasdasdadadasd
          </p>
          <p>
            lorem sadasd asdasda dsadadsadsadas sadasdasdsadas dsadasdadadsa
            asdasdasdadadasd
          </p>
        </div>
      </div>
    </div>
  );
}

export default What;
