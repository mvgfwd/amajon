import React from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { otentikasi } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passInputRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const pass = passInputRef.current.value;
    //bantuan 3rd party firebase
    otentikasi
      .signInWithEmailAndPassword(email, pass)
      .then((otentik) => {
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  const registerAcc = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const pass = passInputRef.current.value;
    //validasi tipis-tipis
    if (!email.includes("@")) {
      alert("Email From Another Galaxy?");
      return;
    }
    //bantuan 3rd party firebase
    otentikasi
      .createUserWithEmailAndPassword(email, pass)
      .then((otentikasi) => console.log(otentikasi))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          alt="amazonk"
          className="login__gambar"
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png"
        />
      </Link>

      <div className="login__information">
        <h1>Sign-in</h1>
        <form>
          <label for="email">
            <h5>Email</h5>
          </label>
          <input type="text" id="email" ref={emailInputRef} />
          <label for="password">
            <h5>Password</h5>
          </label>
          <input type="password" id="password" ref={passInputRef} />
          <button className="login__button" type="submit" onClick={submitForm}>
            Login
          </button>
        </form>

        <p>
          Login to my Funny Copywriting Amazon Clone Website, Created with{" "}
          <span style={{ textDecoration: "line-through" }}>Love</span> Gabut by
          Yonathan Simbolon
        </p>

        <button className="login__daftar" onClick={registerAcc}>
          Buat Akun
        </button>
      </div>
    </div>
  );
}

export default Login;
