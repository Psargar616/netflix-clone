import React, { useRef, useState } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";
// import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   apiKey: "AIzaSyC-RRVtAQo9Bp5DXidX3vCHrZEv5VAoCKA",
//   authDomain: "netflix-clone-a41a8.firebaseapp.com",
//   projectId: "netflix-clone-a41a8",
//   storageBucket: "netflix-clone-a41a8.appspot.com",
//   messagingSenderId: "651775888098",
//   appId: "1:651775888098:web:c5be5b9409f96b69342cbb",
//   measurementId: "G-R3M3YY3TY8",
// };
// // const app = initializeApp(firebaseConfig);
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// const auth = firebase.auth();

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // signin
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  // register
  const Register = (e) => {
    e.preventDefault();
    // setEmail(e.target.email.value);
    // setPassword(e.target.password.value);

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // Signed in
        var user = authUser.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
        // ..
      });
  };
  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          name="email"
          type="email"
          placeholder="Email"
        ></input>
        <input
          ref={passwordRef}
          name="password"
          type="password"
          placeholder="Password"
        ></input>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signInScreen__gray">New to Netflix? </span>
          <span className="signInScreen__link" onClick={Register}>
            Sign Up Now.
          </span>{" "}
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
