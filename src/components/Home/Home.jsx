import React from "react";
import FastfoodSharpIcon from "@mui/icons-material/FastfoodSharp";
import RestaurantSharpIcon from "@mui/icons-material/RestaurantSharp";
import RiceBowlSharpIcon from "@mui/icons-material/RiceBowlSharp";
import { Specials } from "./Specials";
import { OnTheGo } from "./OnTheGo";
export const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="text-container">
          <h1>Welcome to Foodies...</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus sapiente, eaque expedita voluptate esse, voluptas
            soluta neque, nemo adipisci placeat id. Commodi architecto labore
            possimus distinctio officiis eveniet accusamus rerum.
          </p>
        </div>

        <div className="images">
          <img
            src="          https://images.pexels.com/photos/11743998/pexels-photo-11743998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Anh Nguyen"
          />{" "}
          <img
            src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Anh Nguyen"
          />{" "}
          <img
            src="https://media.istockphoto.com/photos/sushi-picture-id135849804?k=20&m=135849804&s=612x612&w=0&h=pS3bwd0oVX2Wf3leuUV8V-ivJgglLiCsg0nikG4TXn8="
            alt="Anh Nguyen"
          />
        </div>
      </section>
      <section className="menu-container">
        <div className="menu">
          <div className="menu-icon">
            <FastfoodSharpIcon sx={{ fontSize: 90 }} />
          </div>
          <p>Fast Food</p>
        </div>
        <div className="menu">
          <div className="menu-icon">
            <RiceBowlSharpIcon sx={{ fontSize: 90 }} />
          </div>
          <p>Local Dish</p>
        </div>{" "}
        <div className="menu">
          <div className="menu-icon">
            <RestaurantSharpIcon sx={{ fontSize: 90 }} />
          </div>
          <p>Intercontinental</p>
        </div>
      </section>
      <Specials />
      <OnTheGo />
    </div>
  );
};
