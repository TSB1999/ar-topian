import React, { useContext } from "react";
import UserContext from "../../1.stores/UserContext";
import Sort from "../../5.elements/1.molecules/query-filter";
import Proceed from "../../5.elements/0.atoms/buttons/proceed";
import Flex from "../../5.elements/0.atoms/containers/flex";

export default function BASKET_PAGE({ total, ...props }) {
  const { userData } = useContext(UserContext);
  const { basket } = userData;
  console.log(userData);
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
            <Proceed icon="shopping-basket" label="PROCEED TO CHECKOUT" />
          </div>
          <div>developed by TSB M3DIA</div>
        </div>
      </Flex>
    </div>
  );
}
