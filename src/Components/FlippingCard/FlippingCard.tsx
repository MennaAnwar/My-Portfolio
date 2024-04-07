import { FC } from "react";
import "./FlippingCard.css";

const FlippingCard: FC = () => {
  return (
    <div className="flip">
      <div className="front"></div>
      <div className="card-content back">
        <p>Jun 2022 – Jul 2022</p>
        <p>That internship aimed to develop front-end development skills.</p>
        <ul>
          <li>Projects: </li>
          <li>Calculator</li>
          <li>Rock, Paper & Scissors</li>
        </ul>
      </div>
    </div>
  );
};

export default FlippingCard;
