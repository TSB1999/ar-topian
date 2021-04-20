import React, { useState, useContext } from "react";
import UserContext from "../../1.stores/UserContext";
import Sort from "../../5.elements/1.molecules/query-filter";
import Grid from "../../5.elements/0.atoms/containers/grid";
import Flex from "../../5.elements/0.atoms/containers/flex";
import Proceed from "../../5.elements/0.atoms/buttons/proceed";
import SizeButton from "../../5.elements/0.atoms/buttons/size";
import { Link } from "react-router-dom";
import Heading from "../../5.elements/0.atoms/text/heading";

export default function SHOP__PAGE(props) {
  const [quantity, setQuantity] = useState(1);
  const { userData, setUserData } = useContext(UserContext);
  console.log(props.match.params);
  const name = props.match.params.item;

  const addItem = () => {
    //  add to local stoarage
    setUserData({
      ...userData,
      basket: [...userData.basket, userData.current],
    });
    props.history.push("/shop");
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
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <Sort setting="high to low" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Proceed icon="upload" label="UPLOAD A SHORT CLIP" />
        </div>

        <Flex flexDirection="column">
          <div style={{ height: "35vh" }}></div>
        </Flex>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "0.7rem",
          }}
        >
          <div className="shop__button">
            <SizeButton label="S" selected={false} />
          </div>
          <div className="shop__button">
            <SizeButton label="M" selected={true} />
          </div>
          <div className="shop__button">
            <SizeButton label="L" selected={false} />
          </div>
          <div className="shop__button">
            <SizeButton label="XL" selected={false} />
          </div>
        </div>

        <Flex flexDirection="column" backgroundColor="#000" color="#fff">
          <div style={{ padding: "1rem" }}>
            <div
              style={{
                marginBottom: "1rem",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              ${`56`}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "1rem",
              }}
            >
              <button
                onClick={() =>
                  setQuantity((quantity) => (quantity !== 1 ? quantity - 1 : 1))
                }
              >
                -
              </button>
              <button>{quantity}</button>
              <button onClick={() => setQuantity((quantity) => quantity + 1)}>
                +
              </button>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <Proceed icon="window-close" label="CANCEL" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <Proceed
                icon="plus"
                label="ADD ANOTHER"
                onClick={() => addItem()}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <Link to="/basket">
                <Proceed icon="shopping-basket" label="PROCEED TO CHECKOUT" />
              </Link>
            </div>
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              developed by TSB M3DIA
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
}
