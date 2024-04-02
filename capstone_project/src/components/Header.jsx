import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from '../assets/icons_assets/restauranfood.jpg'
const Header = () => {

    const navigate =useNavigate();
  return (
    <header className="header">
      <section>
        {/* banner text */}

        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>chicago</h3>
          <p>
            We are family owned mediterraneran restaurant ,focoused on tradition
            recipes srved with a moder twist.
          </p>
          <button onClick={()=>  navigate("/booking")} >Reserve Table</button>

          {/* banner image */}
          <div className="banner-img">
          <img src={bannerImg} alt="Banner Image" />
          </div>
          
                        
        </div>
      </section>
    </header>
  );
};

export default Header;
