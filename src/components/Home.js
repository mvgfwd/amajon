import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          alt="alt"
          className="home__containerImg"
          src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
        />

        <div className="home__prodRow">
          <Product
            key={Math.random()}
            id={1231233}
            judul="Kursi Bekas Lalisa Blackpink (Beban maksimal: 30 Ton, Made in: Purwodadi, Chile Republic)"
            harga={1850000}
            rating={4}
            gambar="https://id-test-11.slatic.net/p/0f5e2f7d0cdb662d5b821cfa7c176bf4.jpg"
          />
          <Product
            key={Math.random()}
            id={12312334}
            judul="Makanan Kpopers: Bubur Sisa Kim Jong Un (Hanya produksi 1 porsi / minggu live dari Korea Utara)"
            harga={50000}
            rating={5}
            gambar="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/07/01/resep-bubur-ayam-kuning-kreasi-20210701052051.jpg"
          />
        </div>
        <div className="home__prodRow">
          <Product
            key={Math.random()}
            id={123123311}
            judul="Buku Wajib Anak Kos (Memasak nasi goreng tanpa nasi (makan penggorengannya))"
            harga={3000}
            rating={5}
            gambar="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1479534607i/33011516.jpg"
          />
          <Product
            key={Math.random()}
            id={1231233121}
            judul="Ganjal Mobil: Parkir Mobil dengan Aman mulai dari 20ribuan"
            harga={23000}
            rating={5}
            gambar="https://s4.bukalapak.com/img/44056410292/s-300-300/data.jpeg"
          />
          <Product
            key={Math.random()}
            id={12312331251}
            judul="Sepeda penambah masa otot"
            harga={323000}
            rating={2}
            gambar="https://www.pulsk.com/images/2015/12/14/566eb1e63ba6f_566eb1e63c0f7.jpg"
          />
        </div>
        <div className="home__prodRow">
          <Product
            key={Math.random()}
            judul="Tiang Jemuran"
            id={6336462}
            harga={200000}
            rating={3}
            gambar="https://awsimages.detik.net.id/community/media/visual/2018/02/15/1526f77f-7c34-4104-b78c-6825c4d3cd77_169.jpeg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
