/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import StarRating from "./StarRating.js";

import Fade from 'react-reveal/Fade';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default function Testimonial(props) {
   // props.onUpdate();
   const data = props.data;
  return (
    <Fade bottom>
      <section className="container mx-auto">
        <h1 className="text-5xl text-theme-blue text-center font-bold">Testimonials</h1>

        <p className="font-light text-lg text-gray-400 text-center mb-3 sm:mb-3 xl:mb-4">
          What they said about us.
        </p>

        <Splide
          options={{
            type: 'loop',
            autoplay: true,
          }}
        >
          {
                        data && data.map((item) => (
                          <SplideSlide>
                            <div className="flex-col xl:w-4/5 rounded-2xl shadow-xl sm:shadow-2xl border border-light-theme-purple px-8 py-6 mx-2 mb-6 mt-6 xl:mx-auto sm:mx-6 sm:mb-12">
                              <div className="flex items-center mb-5">
                                <img src='../assets/images/Design.png' alt="Testimoni" className="w-32 h-32 rounded-full" />
                                <div className="flex-col pl-5">
                                  <h2 className="text-theme-blue text-2xl">{item.name}</h2>
                                  <p className="font-light text-gray-400">{item.companyname}</p>
                                  <StarRating rating={item.rating}/>
                                </div>
                              </div>
                              <p className="font-light text-2xl text-gray-400 pl-5 pt-3 pb-1">
                                {item.content}
                              </p>
                            </div>
                          </SplideSlide>
                        ))
                    }
        </Splide>
      </section>
    </Fade>
  );
}
