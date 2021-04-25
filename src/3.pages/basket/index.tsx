import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "../../1.stores/UserContext";
import Sort from "../../5.elements/1.molecules/query-filter";
import Proceed from "../../5.elements/0.atoms/buttons/proceed";
import Flex from "../../5.elements/0.atoms/containers/flex";
import StripeCheckout from "react-stripe-checkout";

export default function BASKET_PAGE({ ...props }) {
  const { userData, setUserData } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { basket } = userData;

  const deleteItem = (key) => {
    const data = userData.basket;
    data.splice(key, 1);

    setUserData({
      ...userData,
      basket: data,
    });
  };

  async function handleToken(token, product) {
    setLoading(true);
    console.log("start");
    const response = await axios.post(
      "https://mnnlb.sse.codesandbox.io/checkout",
      {
        product,
        token,
      }
    );
    const { status } = response.data;
    if (status === "success") {
      setLoading(false);
      toast("Success! Payment Recieved - We'll email you soon", {
        type: "success",
      });
    } else {
      setLoading(false); // Here if you want to use it
      toast("Something went wrong", { type: "error" });
      console.log("fail");
    }
  }

  let total = 0;
  basket.map((item) => (total += item.price));
  // round total to 2 dp
  total = Math.round(total * 1000) / 1000;
  console.log(total, Math.round(total * 1000) / 1000);

  console.log(userData.basket, "ver");

  const product = {
    name: "ARtopian order",
    price: total,
  };
  return (
    <div style={{ background: "#7e7e7e" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Sort setting="high to low" />
      </div>

      {basket.map((item, key) => {
        return (
          <div style={{ width: "100%", marginBottom: "1rem" }}>
            <div style={{ display: "flex", margin: "1rem" }}>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    height: "10vh",
                    backgroundColor: "#1a1a1a",
                  }}
                >
                  <img
                    src={item.image}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "10vh",
                  flex: 3,
                  backgroundColor: "#fff",
                  color: "#292929",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div style={{ fontWeight: 500 }}>{item.size}</div>
                <div style={{ fontWeight: "bold" }}>{item.name}</div>
                <div style={{ fontWeight: 400 }}>$ {item.price}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button onClick={() => deleteItem(key)}>x</button>
              </div>
            </div>
          </div>
        );
      })}

      <Flex flexDirection="column" backgroundColor="#000" color="#fff">
        <div
          className="shop__footer"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginBottom: "1rem",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            ${` ${total}`}
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "1rem",
              justifyContent: "center",
            }}
          >
            <StripeCheckout
              stripeKey="pk_test_51IjuJwH9RJLzLeBMhoZaje2O03xtXpsHEPRtOHVKWzl63TCxl7IudEc6OuVrz34eQqRdIPs64RPdYbsiqzrcnjkJ00DF7QSrfb"
              token={(token) => {
                handleToken(token, product);
              }}
              currency="GBP"
              billingAddress
              shippingAddress
              amount={total * 100}
              name={`${"ARtopian order"} `}
            />
          </div>
          <div style={{ fontWeight: "bold" }}>developed by TSB M3DIA</div>
        </div>
      </Flex>
    </div>
  );
}
