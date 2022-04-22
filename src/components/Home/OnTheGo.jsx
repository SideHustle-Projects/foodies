// import DeliveryDiningSharpIcon from "@mui/icons-material/DeliveryDiningSharp";
import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
export const OnTheGo = () => {
  return (
    <div>
      <div className="otg-container">
        <img
          src="https://www.pngkey.com/png/full/8-87286_food-main-cooking-with-weed-book.png"
          alt=""
        />
        <div className="otg">
          <div className="otg-text">
            <h2>Have your Food on the go</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit in fugit totam architecto ut laboriosam eligendi
              praesentium dio. Sequi, ex nobis?
            </p>
          </div>
          <a href="/">Order Now</a>
        </div>
      </div>
      <div className="foodies-app-container">
        <div className="foodies-app">
          <div className="foodies-app-text">
            <h1>Foodies</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus voluptatem facere dolorem incidunt libero rerum
              veritatis pariatur sapiente molestias quod quasi dolores tempore
              ipsam nisi, aut sequi provident minus illo.
            </p>
          </div>
          <div className="btn-container">
            <a href="http://" className="download-btn">
              <div className="btn">
                <AppleIcon sx={{ fontSize: 40, mr: 2 }} />
                App Store
              </div>
            </a>
            <a href="http://" className="download-btn">
              <div className="btn">
                <PlayArrowIcon sx={{ fontSize: 40, mr: 2 }} /> Google Play
              </div>
            </a>
          </div>
        </div>
        <img
          src="https://food.jumia.com.ng/images/jumia-food-app-mockup.png?v=1596116892"
          alt=""
        />
      </div>
    </div>
  );
};
