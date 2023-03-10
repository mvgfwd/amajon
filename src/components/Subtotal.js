import React from "react";
// import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateVal } from "../context/context";
import { totalHargaCart } from "../context/reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ user }, dispatch] = useStateVal();

  const navigate = useNavigate();

  const prosesBayar = () => {
    if (!user) {
      alert("SIGN-IN DULU BARU PESAN");
      return;
    }
    navigate("/pembayaran");
  };

  const [{ cart }] = useStateVal();
  return (
    <div className="subtot">
      
            <p>
              Subtotal ({cart.length} items) = Rp<strong>{totalHargaCart(cart)},-</strong>
            </p>
            <small className="subtot__voucher">
              <input type="checkbox" /> This Order Contains a Gift
            </small>
      <button onClick={prosesBayar}>Proses Mang!</button>
    </div>
  );
}

export default Subtotal;
