import React, { useState, useEffect } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import axios from "axios";

function Cards() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/list");
        setList(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="cards">
      <h1>Check out the listed Businesses Here!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {list.map((item) => (
            <ul  key={item._id} className="cards__items">
              <CardItem
              src='image/img-8.jpg'
              text={item.location}
                label={item.name}

                path='/services'
              />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;