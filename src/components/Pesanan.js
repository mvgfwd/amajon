import React from "react";
import "./Pesanan.css";
import { useStateVal } from "../context/context";
import COutProduct from "./COutProduct";
import { totalHargaCart } from "../context/reducer";

function Pesanan() {
  const d = new Date();
  let day = d.getDate();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let bulan = month[d.getMonth()];
  let tahun = d.getFullYear();

  const [{ cart, alamat, user }, dispatch] = useStateVal();

  return (
    <div className="pesanan__general">
      <div className="pesanan__title">
        <h1>Pesanan Anda</h1>
      </div>
      <div className="pesanan">
        <div className="pesanan__detail">
          <p>
            <p>
              <strong>{user.email}</strong>
            </p>
            <address style={{ marginTop: "5px" }}>{alamat}</address>
            <p style={{ marginTop: "5px" }}>
              Tanggal Order: {day}, {bulan}, {tahun}{" "}
            </p>
            <p style={{ marginTop: "10px" }}>
              Total Order: Rp{totalHargaCart(cart)}{" "}
            </p>
          </p>
        </div>
        {cart.map((e) => (
          <COutProduct
            key={e.id}
            id={e.id}
            gambar={e.gambar}
            judul={e.judul}
            harga={e.harga}
            rating={e.rating}
            hilangkanButton
          />
        ))}
      </div>
    </div>
  );
}

export default Pesanan;
