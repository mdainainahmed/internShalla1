/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Button from "../Button";
import img from "../../Images/img1.png"

import "./DealCard.css";
function DealCards({
  cardTitile,
  offerPercent,
  offerTime,
  heading,
  description,
  price,
}) {
  const [dealPrice, setDealPrice] = useState(price);

  useEffect(() => {
    let currentPrice = price-((price * offerPercent) / 100);
    setDealPrice(currentPrice.toFixed(2));
  }, [price, offerPercent]);

  return (
    <div id="dealCards">
      <img className="dealImage" src={img} alt={cardTitile} />
      <div className="card-details">
      <div className="offers">
        <div className="offerPriceTime">{offerPercent}% Off</div>
        <div className="offerPriceTime">{offerTime}</div>
      </div>
      <div className="heading">{heading}</div>
      <div className="description">{description}</div>
      <div className="price">
        <div className="offer-price">${dealPrice}</div>
        <div className="real-price">${price}</div>
        <div className="offer-percent">({offerPercent}% Off)</div>
      </div>
      <Button text="View Deal" width="292px" height="48px" bdRadius="10px"/>
      </div>
    </div>
  );
}

export default DealCards;
