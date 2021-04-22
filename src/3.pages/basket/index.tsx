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
  const { userData } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { basket } = userData;

  async function handleToken(token) {
    setLoading(true);
    console.log("start");
    const response = await axios.post(
      "https://j3m2f.sse.codesandbox.io/checkout",
      {
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
    }
  }

  let total = 0;
  basket.map((item) => (total += item.price));
  console.log(userData.basket, "ver");
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
              <div style={{ flex: 1, backgroundColor: "green" }}>
                <div
                  style={{
                    height: "10vh",
                    backgroundColor: "#1a1a1a",
                  }}
                >
                  image
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "10vh",
                  flex: 3,
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>{item.type}</div>
                <div>{item.name}</div>
                <div>{item.price}</div>
              </div>
            </div>
          </div>
        );
      })}

      <Flex flexDirection="column" backgroundColor="#000" color="#fff">
        <div className="shop__footer">
          <div style={{ marginBottom: "1rem" }}>${` ${total}`}</div>
          <div style={{ marginBottom: "1rem" }}>
            {/* <Proceed icon="shopping-basket" label="PROCEED TO CHECKOUT" /> */}
            <StripeCheckout
              stripeKey="pk_test_51I6mKCDfXHQFQVOullPWJg7eYcVE87dBsMUsLNNWUz0h9JxVEGXgNpEwVhlkEwOxZx7c82ga81J6mxm53FWP2G2a00LjjoGjtb"
              token={(token) => {
                handleToken(token);
              }}
              currency="GBP"
              billingAddress
              shippingAddress
              amount={total * 100}
              name={`${"ARtopian order"} `}
              // style={{
              //   // flex: 1,
              //   alignSelf: "start",
              //   gridColumn: "1/5",
              // }}
            />
          </div>
          <div>developed by TSB M3DIA</div>
        </div>
      </Flex>
    </div>
  );
}
