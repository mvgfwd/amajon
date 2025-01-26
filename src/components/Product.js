import React from "react";
import "./Product.css";
import { useStateVal } from "../context/context";

function Product({ id, judul, harga, rating, gambar }) {
  const [state, dispatch] = useStateVal();

  const tambahKeCart = () => {
    dispatch({
      type: "ADD_ITEM",
      item: {
        key: Math.random(),
        id: id,
        judul: judul,
        harga: harga,
        rating: rating,
        gambar: gambar,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__desc">
        <p>{judul}</p>
        <p className="product__harga">
          <small>Rp</small>
          <strong>{harga}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img alt="alt pic" src={gambar} />
      <button onClick={tambahKeCart}>Tambah ke Keranjang</button>
    </div>
  );
}

export default Product;
