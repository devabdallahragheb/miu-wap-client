import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
export default function QAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASEURL = process.env.REACT_APP_BASEURL;

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      console.log(result);
      const res = await fetch(BASEURL+"/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          photo: result.user.photoURL,
          email: result.user.email,
        }),
      });

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        onClick={handleGoogleClick}
        type="button"
        className="bg-red-800  text-white p-3 rounded-lg   uppercase hover:opacity-95 text-center"
      >
        Containue Wit Google
      </button>
    </div>
  );
}
