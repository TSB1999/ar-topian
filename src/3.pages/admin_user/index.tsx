import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../1.stores/UserContext";
import Flex from "../../5.elements/0.atoms/containers/flex";
import Proceed from "../../5.elements/0.atoms/buttons/proceed";
import Heading from "../../5.elements/0.atoms/text/heading";
import axios from "axios";
import { app } from "../../config";
import flex from "../../5.elements/0.atoms/containers/flex";

export default function AdminUser(props) {
  const [orders, setOrders] = useState([]);
  const { userData, setUserData } = useContext(UserContext);
  console.log(props.match.params);
  const name = props.match.params.user;

  useEffect(() => {
    axios
      .get(`/user/${name}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userData.token,
        },
      })
      .then((res) => {
        console.log(res.data.orders, "rge");
        let array = [];
        res.data.orders.map((order, key) => {
          console.log(JSON.parse(order.order), "df");
          array = array.concat(JSON.parse(order.order));
          setOrders(array);
        });
      })
      .catch((err) => {
        console.log(err, "rdfw");
      });
    // arrange data and set to state
  }, []);
  // console.log(orders);

  const next = (order, key) => {
    // save current admin
    // console.log(order);
    setUserData({
      ...userData,
      current_patt: {
        order,
        key,
      },
      orders,
    });
    props.history.push(`${name}/${order.id}`);
  };

  return (
    <div style={{ background: "#7e7e7e" }}>
      <div style={{ paddingTop: "0.6rem" }}>
        <div>
          <Heading label={name} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {orders.map((order: any, key) => (
            <button
              key={key}
              onClick={() => next(order, key)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <img style={{ height: "50%", width: "50%" }} src={order.image} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0.5rem",
                }}
              >
                <div>{order.name}</div>
                <div>{order.size}</div>
              </div>
            </button>
          ))}
        </div>

        <Flex flexDirection="column" backgroundColor="#000" color="#fff">
          <div style={{ padding: "1rem" }}>
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              developed by TSB M3DIA
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
}
