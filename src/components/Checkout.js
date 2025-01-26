import React from "react";
import "./Checkout.css";
import COutProduct from "./COutProduct";
import { useStateVal } from "../context/context";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart, user }] = useStateVal();

  return (
    <div className="checkout">
      <div className="checkout__kiri">
        <img
          alt="ad"
          className="checkout__iklan"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div className="checkout__detail">
          <h4>
            Hallo <span>{user?.email}</span>
          </h4>
          <h2>Your Belanjaan</h2>
          {cart.map((e) => (
            <COutProduct
              key={Math.random()}
              gambar={e.gambar}
              judul={e.judul}
              id={e.id}
              harga={e.harga}
              rating={e.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__kanan">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
