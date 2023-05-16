import React from "react";
import DiscussForm from "./DiscussForm";
import Header from "./Header";
import HeaderafterLogin from "./headerAfterLogin";
import Login from "./login.js";
import SignUp from "./Signup.js";

export default function DiscussSection(props) {
   const {isLogin ,setisLogin ,isSignup , setisSignup, user, setUser} = props;
   window.scroll(0, 0);
  return isLogin ? (
    <>
      <HeaderafterLogin {...props}  user={user} setisLogin={setisLogin}/>
      <DiscussForm
        data={props.data}
        onChange={props.onChange}
        resetForm={props.resetForm}
      />
    </>
  ) : isSignup ? (
    <>
      <Header {...props} />
      <Login setisLogin={setisLogin} setUser={setUser} setisSignup={setisSignup} />
    </>
  ) : (
    <>
      <Header {...props} />
      <SignUp setisLogin={setisLogin} setUser={setUser} setisSignup={setisSignup} />
    </>
  );
}
