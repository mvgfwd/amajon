import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { Products } from "./Home.service";
import { useStateVal } from "../context/context";

function Home() {
  const [isCartNotif, setIsCartNotif] = useState(true);
  const [{ cart }] = useStateVal();

  useEffect(() => {
    onClickAddedToChart();
  }, [cart]);

  const onClickAddedToChart = () => {
    setIsCartNotif(true);
    setTimeout(() => {
      setIsCartNotif(false);
    }, 2000);
  };

  return (
    <div className="home">
      {isCartNotif && <div className="cart__notif">Added To Cart!</div>}

      <div className="home__container">
        <img
          alt="alt"
          className="home__containerImg"
          src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
        />

        <div className="home__prodRow">
          {Products.slice(0, 2).map((e) => (
            <Product
              key={e.id}
              id={e.id}
              judul={e.judul}
              harga={e.harga}
              rating={e.rating}
              gambar={e.gambar}
            />
          ))}
        </div>
        <div className="home__prodRow">
          {Products.slice(2, 5).map((e) => (
            <Product
              key={e.id}
              id={e.id}
              judul={e.judul}
              harga={e.harga}
              rating={e.rating}
              gambar={e.gambar}
            />
          ))}
        </div>
        <div className="home__prodRow">
          {Products.slice(5, 6).map((e) => (
            <Product
              key={e.id}
              id={e.id}
              judul={e.judul}
              harga={e.harga}
              rating={e.rating}
              gambar={e.gambar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
