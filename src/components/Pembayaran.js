import React, { useEffect, useState, useRef } from "react";
import "./Pembayaran.css";
import { useStateVal } from "../context/context";
import COutProduct from "./COutProduct";
// import CurrencyFormat from "react-currency-format"; //supporting stripe
import { totalHargaCart } from "../context/reducer"; //supporting stripe
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase";

//stripe punya
import { CardElement } from "@stripe/react-stripe-js";

function Pembayaran() {
  const addrInputRef = useRef();

  const [{ cart, user }, dispatch] = useStateVal();

  const navigate = useNavigate();

  // const stripe = useStripe();
  // const elements = useElements();

  const [locked, setLocked] = useState(true);
  const [error, setError] = useState(null);
  const [proses, setProses] = useState("");
  const [berhasil, setBerhasil] = useState(false);
  const [clienSecret, setClienSecret] = useState(true);

  useEffect(() => {
    const getKlienSec = async () => {
      const response = await axios({
        url: `/pembayaran/create?total=${totalHargaCart(cart) * 100}`, //stripe need total harga
        method: "post",
      });
      setClienSecret(response.data.clienSecret);
    };
    getKlienSec();
  }, [cart]);

  console.log("Client Secret = ", clienSecret);

  const submitHandler = async (e) => {
    e.preventDefault();
    const alamat = addrInputRef.current.value;
    if (alamat.length < 5) {
      alert("Please Input Your Address");
      return;
    } else if (
      !alamat.includes(
        "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9"
      )
    ) {
      alert("Nomor Rumahnya Mana");
      return;
    } else {
      dispatch({
        type: "ALAMAT",
        alamat: alamat,
      });
    }
    setBerhasil(true)
    setProses(true);
    database
      .collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(user?.uid)
      .set({
        cart: cart,
      });
    // dispatch({
    //   type: "KOSONGIN",
    // });

    navigate("/order");

    //MASIH GAK JALAN !!!
    // const payload = await stripe
    //   .confirmCardPayment(clienSecret, {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //     },
    //   })
    //   .then(({ paymentIntent }) => {
    //     setBerhasil(true);
    //     setError(null);
    //     setProses(false);
    //   });
  };

  const changeHandler = (e) => {
    setError(e.error ? e.error.message : "");
    setLocked(e.empty);
  };

  return (
    <>
      <div className="bayar__totItem">
        <h1>Total Item = {cart.length} item</h1>
      </div>
      <div className="bayar">
        <div className="bayar__sub">
          <div className="bayar__judul">
            <h3>Delivery Address</h3>
          </div>
          <div className="bayar__addr">
            <p>{user?.email}</p>
            <input
              placeholder="YourAddress"
              className="inputAddr"
              ref={addrInputRef}
              type="text"
              required
            />
          </div>
        </div>

        <div className="bayar__sub">
          <div className="bayar__judul">
            <h3>Item(s) that ready to buy</h3>
          </div>
          <div className="bayar__barang">
            {cart.map((e) => (
              <COutProduct
                key={Math.random()}
                id={e.id}
                gambar={e.gambar}
                judul={e.judul}
                harga={e.harga}
                rating={e.rating}
              />
            ))}
          </div>
        </div>

        <div className="bayar__sub">
          <div className="bayar__judul">
            <h3>Methode of Payment</h3>
          </div>

          <div className="bayar__detail">
            <form onSubmit={submitHandler}>
              <CardElement onChange={changeHandler} />
              <div className="bayar__harga">
                <h3>Total Order = {totalHargaCart(cart)}</h3>
                  
                <button disabled={locked || proses || berhasil}>
                  {" "}
                  {proses ? <p>Processing</p> : "Buy Now!"}{" "}
                </button>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pembayaran;
