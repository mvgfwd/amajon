import React from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { otentikasi } from "../firebase";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passInputRef = useRef();
  const [isNotifShow, setIsNotifShow] = useState({
    isShow: false,
    msg: "",
    success: false,
  });

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
      .catch((err) => {
        setIsNotifShow({
          isShow: true,
          msg: err.message,
          success: false,
        });
        emailInputRef.current.value = "";
        passInputRef.current.value = "";
      });
  };

  const registerAcc = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const pass = passInputRef.current.value;
    // validasi tipis-tipis
    if (!email.includes("@")) {
      setIsNotifShow({
        isShow: true,
        msg: "Put a Legit Email Please!",
        success: false,
      });
      return;
    }
    if (!email || !pass) {
      setIsNotifShow({
        isShow: true,
        msg: "You need to fill email & password to register",
        success: false,
      });
      return;
    }
    //bantuan 3rd party firebase
    otentikasi
      .createUserWithEmailAndPassword(email, pass)
      .then((otentikasi) => {
        setIsNotifShow({
          isShow: true,
          msg: "Registrasi Sukses. Go Login Now Fellas!",
          success: true,
        });
        emailInputRef.current.value = "";
        passInputRef.current.value = "";
      })
      .catch((err) => {
        setIsNotifShow({
          isShow: true,
          msg: "Registrasi gagal",
          success: false,
        });
      });
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
          <label htmlFor="email">
            <h5>Email</h5>
          </label>
          <input type="text" id="email" ref={emailInputRef} />
          <label htmlFor="password">
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
      {isNotifShow.isShow && (
        <div
          onClick={() =>
            setIsNotifShow({ isShow: false, msg: "", success: true })
          }
          className={`${
            isNotifShow.success
              ? "notifikasi__daftar__sukses"
              : "notifikasi__daftar__gagal"
          }`}
        >
          <span>{isNotifShow.msg}</span>
        </div>
      )}
    </div>
  );
}

export default Login;
