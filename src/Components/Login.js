

/* eslint-disable jsx-a11y/img-redundant-alt */
import { BG_URL } from "../Utils/constant";
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../Utils/validate";



const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    // Validation  
    console.log(email.current.control.value);
    console.log(password.current.control.value);

    const message = checkValidData(email.current.control.value,password.current.control.value);
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div className="relative bg-black">
      <Header />

      {/* BACKGROUND IAMGE APPEAR ONLY ABOVE MEDIUM SCREENS */}
      <div className="z-10 min-h-screen bg-black  md:bg-transparent">
        <img className=" absolute hidden md:block min-h-screen w-full h-full bg-cover bg-center" src={BG_URL} alt="Netflix Background Image On login page"/>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* LOGIN FORM */}
      <form onSubmit={(e)=> e.preventDefault()} className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:p-12 md:bg-opacity-70 md:bg-black md:w-1/3 md:rounded-md">
        
        {/* SIGN IN || SIGN UP Heading */}
        <h1 className=" font-bold text-3xl py-4"> {signInForm ? "Sign In" : "Sign Up"} </h1>

        {/* Conditional INPUT FEILD */}
        <label htmlFor="fullname" /> {!signInForm && ( <input type="text" id="fullname" name="fullname" placeholder="Full Name" className="p-2 my-5 h-12 w-full bg-zinc-800 rounded-lg" />)}

        {/* Email , Password Forms & Submit Button */}
        <label htmlFor="email" ref={email}/>
        <input  type="email" id="email" name="email" placeholder="Email Address" className="p-2 my-5 h-12 w-full bg-zinc-800 rounded-lg"/>

        <label htmlFor="password" ref={password}/>
        <input  type="password" id="password" name="password" placeholder="Password" className="p-2 my-5 h-12 w-full bg-zinc-800 rounded-lg" />
        <p className=" text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button type="button" className="p-0.5 my-6 w-full h-12 rounded-lg bg-red-700" onClick={handleButtonClick} > {signInForm ? "Sign In" : "Sign Up"} </button>

        {/* TOGGLE FEATURE SIGN IN / SIGN UP */}
        <p className="py-4  text-zinc-500" onClick={toggleSignInForm}> {signInForm ? "New to Netflix ? " : "Already a user ? "}{" "}<span className="text-white cursor-pointer hover:underline"> {signInForm ? "Sign Up now" : "Sign In now"} </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;