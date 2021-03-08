import React, { useState } from "react";
import TopFiveStyled from "./styles";

export default function TopFive({ riders }) {
  const ridersToDisplay = riders
    .sort((riderA, riderB) => riderA.position - riderB.position)
    .reverse();

  return (
    <TopFiveStyled>
      <h1>Top Five</h1>

      <section className="podium-container">
        {ridersToDisplay.map((rider) => (
          <div key={rider.number} className={rider.position}>
            {rider.name}
          </div>
        ))}
      </section>
      <section className="podium-container">
        <div className="position five">5</div>
        <div className="position four">4</div>
        <div className="position three">3</div>
        <div className="position two">2</div>
        <div className="position one">1</div>
      </section>
    </TopFiveStyled>
  );
}
