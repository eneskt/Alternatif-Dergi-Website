import React from "react";
import "../App.css";
import Afis from "./../images/afis.svg";
import { BiSkipNextCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="body">
      <div className="header">
        <div className="afis">
          <img src={Afis} alt="Afis" />
        </div>
        <div className="details">
          <div className="head-parahraph">
            <h1>Alternatif Dergi</h1>
            <p>
              Alternatif dergi, ana akım ve alternatif medyanın prangalarından
              uzak, bireylerin her konuda öz düşüncelerini ister kendi imzasıyla
              ister anonim olarak okuyuculara aktarabildiği alternatif ve
              yenilikçi bir projedir. Günlük, şiir köşesi, araştırma, koşe
              yazısı, karikatür ve mizah aklınıza gelen ve tutkunuz olan her
              alanda ürettiklerinizi paylaşabileceğiniz kendi sesinizi
              duyurabileceğiniz yeni dönem dergicilik. Başucu defterinizin
              içindekileri oraya hapsetmeyin. Bırakın herkes okusun, bırakın
              herkes bilsin, başucu defteriniz internetin ağlarına yansısın.
              Artık pandoranın kutusu açılsın ve kutu hakkında değil içindekiler
              hakkında konuşulsun.
            </p>
            <Link to="/nedir">
              <div className="next-icon">
                <BiSkipNextCircle />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
