import { SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      imgUrl:
        "https://live.staticflickr.com/65535/48441958476_f183126624_b.jpg",
    },
    {
      name: "Steve Jobs",
      imgUrl: "https://live.staticflickr.com/6176/6215765803_601c32c627_z.jpg",
    },
  ]);

  const swiped = (dir, person) => {
    console.log(`Removing ${person.name}`);
  };

  const outOfFrame = (person) => {
    console.log(`${person.name} left the screen`);
  };

  return (
    <div className="tinder-cards">
      <div className="tinder__cards-container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person)}
            onCardLeftScreen={() => outOfFrame(person)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
