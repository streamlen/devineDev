import React, { useState } from "react";
import '../assets/css/rating.css';

export default function StarRating(props){
   const [rating, setRating] = useState(props.rating);
   const [hover, setHover] = useState(0);
   return (
     <div className="star-rating">
       {[...Array(5)].map((star, index) => {
         index += 1;
         return (
           <button
             type="button"
             key={index}
             className={index <= (hover || rating) ? "on" : "off"}
             onClick={() => setRating(index)}
             onMouseEnter={() => setHover(index)}
             onMouseLeave={() => setHover(rating)}
           >
             <span className="star" style={{fontSize:'1.5rem'}}>&#9733;</span>
           </button>
         );
       })}
     </div>
   );
 };