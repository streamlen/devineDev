import React from "react";
import '../assets/css/rating.css';

export default function StarRating(props){
   return (
     <div className="star-rating">
       {[...Array(5)].map((star, index) => {
         index += 1;
         return (
           <button
             type="button"
             key={index}
             className={index <= (props.rating) ? "on" : "off"}
           >
             <span className="star" style={{fontSize:'1.5rem'}}>&#9733;</span>
           </button>
         );
       })}
     </div>
   );
 };