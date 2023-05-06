/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";

import Fade from "react-reveal/Fade";

export default function Service({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-20 pb-28">
        <Fade bottom>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Our Service
          </h1>

          <p className="font-light text-lg text-gray-400 text-center mb-12">
            We are ready to scale up your business with our great service.
          </p>
        </Fade>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            // <Fade bottom delay={500 * index}>
              <div>
                {/* <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105"> */}

{/* relative group rounded-2xl shadow-xl w-auto  m-3 duration-500 hover:scale-110 portofolio-card */}

                <div className="card rounded-2xl w-auto shadow-xl hover:scale-105 border-light-theme-purple">
                  {/* action */}
                  <div className="background">
                    <img
                      src={item.imageUrl}
                      alt="Service"
                      className="w-full rounded-t-2xl"
                    />
                    <h2 className="text-theme-blue text-center text-xl py-7 rounded-b-2xl">
                      {item.title}
                    </h2>
                  </div>
                  {/* black absolute w-full h-full flex opacity-0 bg-black justify-center rounded-2xl  translate-y-full img-hover duration-500
                     align-item-center */}
                  <div className="foreground w-full h-full bg-slate-600 bg-opacity-70">
                      <div className="w-full h-full text-white items-center flex justify-center">
                        <p className="text-2xl space-y-8">
                          {item.providings?item.providings.map((item)=>(
                           <div>{item}</div>
                          )):""}
                        </p>
                      </div>
                    </div>
                </div>

              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
