import React from "react";
import DiscussForm from "./DiscussForm";
import Header from "./Header";
import HeaderafterLogin from "./headerAfterLogin";
import Login from "./login.js";
import SignUp from "./Signup.js";

export default function DiscussSection(props) {
   const {isLogin ,setisLogin ,isSignup , setisSignup} = props;
   window.scroll(0, 0);
  return isLogin ? (
    <>
      <HeaderafterLogin {...props}  setisLogin={setisLogin}/>
      <DiscussForm
        data={props.data}
        onChange={props.onChange}
        resetForm={props.resetForm}
      />
    </>
  ) : isSignup ? (
    <>
      <Header {...props} />
      <Login setisLogin={setisLogin} setisSignup={setisSignup} />
    </>
  ) : (
    <>
      <Header {...props} />
      <SignUp setisLogin={setisLogin} setisSignup={setisSignup} />
    </>
  );
}
