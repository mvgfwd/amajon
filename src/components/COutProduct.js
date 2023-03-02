import React from "react";
import "./COutProduct.css";
import { useStateVal } from "../context/context";

function COutProduct({ id, gambar, judul, harga, rating, hilangkanButton }) {
  const [state, dispatch] = useStateVal();

  function removeItem() {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  }

  return (
    <div className="coutproduct">
      <img className="coutproduct__gambar" alt="Check Out Now" src={gambar} />

      <div className="coutproduct__desc">
        <p className="coutproduct__judul">{judul}</p>
        <p className="coutproduct__harga">
          <small>Rp</small>
          <strong>{harga}</strong>
        </p>
        <div className="coutproduct__rating">
          {Array(rating)
            .fill()
            .map((n, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hilangkanButton && <button onClick={removeItem}>Remove</button>}
      </div>
    </div>
  );
}

export default COutProduct;
