import React from "react";
const coleslaw = {
  id: 1,
  img: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title: "Coleslaw",
  price: 400,
  isAvailable: true,
};
const pasta = {
  id: 2,
  img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  title: "Pasta Fotios",
  price: 80,
  isAvailable: true,
};
const pancakes = {
  id: 3,
  img: "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  title: "Breakfast Pancakes",
  price: 150,
  isAvailable: false,
};
const amala = {
  id: 4,
  img: "https://images.squarespace-cdn.com/content/v1/54222358e4b0ef23d87a996b/1532596355466-J99Q6RFLMSVO6CT52FP1/NOK+Amala.jpg?format=1000w",
  title: "Amala",
  price: 500,
  isAvailable: true,
};

const specials = [coleslaw, pasta, pancakes, amala];

export const Specials = () => {
  return (
    <div className="specials-container">
      <h1 style={{ textAlign: "center", marginBottom: "70px" }}>Specials</h1>
      <div className="special-meal-container">
        {specials.map((s) => (
          <div key={s.id}>
            <img src={s.img} alt="" />
            <div className="special-meal-text">
              <div>
                <p>{s.title}</p>
                <p
                  style={{
                    color: `${s.isAvailable ? "#222" : "#999"}`,
                    marginTop: "-15px",
                  }}
                >
                  {!s.isAvailable ? "No meal" : "Ready"}
                </p>
              </div>
              <p>Price: ${s.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
