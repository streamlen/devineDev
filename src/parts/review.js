/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";

import Fade from "react-reveal/Fade";
// eslint-disable-next-line import/no-extraneous-dependencies
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../elements/Button/index.js";
import ReviewStar from "./reviewStar.js";

export default function Review() {
  const [data, setdata] = useState({ description: ""});
  const [rating, setRating] = useState(0);
  const onChanges = (e) => {
    setdata({ ...data, [e.target.id]: e.target.value});
   //  setdata({ ...data, [data.rating]: rating});
  };

  const submitPost = async()=>{
      await fetch('http://127.0.0.1:3001/v1/postreview',{
         method:"POST",
         headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem("token")
         },
         body: JSON.stringify({
            description: data.description,
            rating: rating,
          }),
      }).then(async(res)=>{
          res = await res.json();
          console.log(res);
         if(res.success){
            toast.success("Success! Thx for Your valuable review .");
         }
         else{
            toast.error("error!! ",res.message);
         }
      })
  }

  return (
    <Fade bottom>
      <div className=" mt-16 bg-gray-50">
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Reviews
        </h1>

        <p className="font-light text-lg text-gray-400 text-center mb-3 sm:mb-3 xl:mb-4">
          Please give a review about our Work
        </p>
        <div className="flex justify-center">
          <ReviewStar
            onChanges={onChanges}
            rating={rating}
            setRating={setRating}
          />
        </div>
        <div className="flex justify-center ">
          <textarea
          id="description"
          name="postContent"
          placeholder={"please provide your precious review"}
          cols={100}
          className={[
            'w-95 sm:w-192 lg:w-192.5 xl:w-192.5 p-4 mx-2 mb-6 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple',
          ].join(' ')}
          onChange={onChanges}
         rows={10}
         required
          />
        </div>
        <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={submitPost}
          >
            Submit
          </Button>
          <ToastContainer />
      </div>
    </Fade>
  );
}
