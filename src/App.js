import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/LoginPage";
import { useEffect } from "react";
import { otentikasi } from "./firebase";
import { useStateVal } from "./context/context";
import Pembayaran from "./components/Pembayaran";
//stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Pesanan from "./components/Pesanan";

//stripe initialization
const promise = loadStripe(
  "pk_test_51Mh80hA7pCdkmArk3tVj5nAP0FZoCmcQFacBTytXp3aetKLaCmxLCZBpjxvCZGBkQVDcA669uWN78tT0EZHhMO4I00Aq8qpv1R"
);

function App() {
  const [{}, dispatch] = useStateVal();

  useEffect(() => {
    otentikasi.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: `SET_USER`,
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            key={1}
            element={[<Header key={"header"} />, <Home key={"home"} />]}
          />
          <Route path="login" key={2} element={<Login />} />
          <Route
            path="/check-out"
            key={3}
            element={[<Header key={"header"} />, <Checkout key={"checkout"} />]}
          />
          <Route
            path="/order"
            key={4}
            element={[<Header key={"header"} />, <Pesanan key={"pesanan"} />]}
          />
          <Route
            key={5}
            path="/pembayaran"
            element={[
              <Header key={"header"} />,
              <Elements key={"element"} stripe={promise}>
                <Pembayaran key={"pembayaran"} />
              </Elements>,
            ]}
          />
        </Routes>
      </div>{" "}
    </Router>
  );
}

export default App;
