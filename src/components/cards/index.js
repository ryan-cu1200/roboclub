import React from "react";
import "../cards/card.css";
import { Card } from "../card";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monsters => (
        <Card key={monsters.id} monster={monsters} />
      ))}
    </div>
  );
}; 
