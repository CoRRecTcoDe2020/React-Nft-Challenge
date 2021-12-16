import React from "react";
import wetch from "../assets/weth.png";
import "./CollectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
    return (
        <div className="collectionCard">
           <img src={image} alt="" />
           <div className="details"></div>
           <div className="name">
               {name} <div className="id"> .#{id}</div>
           </div>
           <div className="priceContainer">
             <img src={wetch} className="wethImage" alt=""></img>
             <div className="price">{traits[0]?.value}</div>
           </div>
        </div>
    )
}

export default CollectionCard;