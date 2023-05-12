import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Transition } from "@headlessui/react";
// const env = require('env');

const SignUp = (props) => {
  const [createcred, setcreatecred] = useState({
    name: "",
    companyname: "",
    email: "",
    password: "",
  });
  const onChanges = (e) => {
    setcreatecred({ ...createcred, [e.target.id]: e.target.value });
  };
  const onclicks = async (e) => {
    e.preventDefault();
    console.log(createcred.email);
    const response = await fetch("https://divinedev-api.onrender.com/v1/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: createcred.name,
        companyname: createcred.companyname,
        email: createcred.email,
        password: createcred.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      console.log("success full", json);
      props.setisSignup(true);
      props.setisLogin(true);
      localStorage.setItem("token", json.authtoken); // saving token in cache memory .
    } else {
      console.log(json);
      alert(json.errors);
    }
  };
  return (
    <div>
      <Transition
        show={true}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Fade>
          <section className="gradient-form h-full bg-neutral-200 flex justify-center">
            <div className="container h-full p-10">
              <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                <div className="w-full">
                  <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                    <div className="g-0 lg:flex lg:flex-wrap">
                      {/* <!-- Left column container--> */}
                      <div className="px-4 md:px-0 lg:w-6/12">
                        <div className="md:mx-6 md:p-12">
                          {/* <!--Logo--> */}
                          <div className="text-center">
                            <img
                              className="mx-auto w-48"
                              src="../assets/images/Design.png"
                              alt="logo"
                            />
                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                              We are <strong>The divineDev</strong> Team
                            </h4>
                          </div>

                          <form onSubmit={onclicks}>
                            <p className="mb-4">Please create your account</p>
                            {/* <!--Username input--> */}
                            <div
                              className="relative mb-4"
                              data-te-input-wrapper-init
                            >
                              <label
                                htmlFor="name"
                                className="pointer-events-none  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="name"
                                placeholder="name"
                                onChange={onChanges}
                                required
                              />
                            </div>

                            <div
                              className="relative mb-4"
                              data-te-input-wrapper-init
                            >
                              <label
                                htmlFor="companyname"
                                className="pointer-events-none  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                              >
                                Company Name
                              </label>
                              <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="companyname"
                                placeholder="Company Name"
                                onChange={onChanges}
                                required
                              />
                            </div>

                            <div
                              className="relative mb-4"
                              data-te-input-wrapper-init
                            >
                              <label
                                htmlFor="email"
                                className="pointer-events-none  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="email"
                                placeholder="email"
                                onChange={onChanges}
                                required
                              />
                            </div>

                            {/* <!--Password input--> */}
                            <div
                              className="relative mb-4"
                              data-te-input-wrapper-init
                            >
                              <label
                                htmlFor="password"
                                className="pointer-events-none left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="password"
                                placeholder="Password"
                                onChange={onChanges}
                                required
                              />
                            </div>

                            {/* <!--Submit button--> */}
                            <div className="mb-12 pb-1 pt-1 text-center">
                              <button
                                className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                type="submit"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                style={{
                                  background:
                                    "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593",
                                }}
                              >
                                SignUp
                              </button>
                            </div>

                            {/* <!--Register button--> */}
                            <div className="flex items-center justify-between pb-6">
                              <p className="mb-0 mr-2">
                                Already have an account?
                              </p>
                              <button
                                type="button"
                                className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={() => props.setisSignup(true)}
                              >
                                Login
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div
                        className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                        style={{
                          background:
                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593",
                        }}
                      >
                        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                          <h4 className="mb-6 text-xl font-semibold">
                            We are more than just a company
                          </h4>
                          <p className="text-sm">
                            We are a brand which helps you to go online and make
                            your company grow to an ultimate level. We also
                            embrace our responsibility to act as a force for
                            positive change. We believe that collective efforts
                            yield greater results so we actively seek for
                            partnerships and collaborations with like-minded
                            organizations, sharing knowledge, resources, and
                            expertise to amplify our impact.
                          </p>
                          <p> <strong>"We are more than just a company"</strong> embodies our commitment to our purpose, people, innovation, sustainability, collaboration, ethics, and empowering future generations. It signifies our determination to create a lasting positive impact on society while achieving sustainable growth and success.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </Transition>
    </div>
  );
};

export default SignUp;
