import React from "react";
import Sort from "../../1.molecules/query-filter";
import Proceed from "../../0.atoms/buttons/proceed";
import Flex from "../../0.atoms/containers/flex";

export default function Checkout({ total, ...props }) {
  return (
    <div className="shop">
      <div
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Sort setting="high to low" />
      </div>

      <div style={{ width: "100%", marginBottom: "1rem" }}>
        <Flex flexDirection="row">
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
            <div>developed by TSB M3DIA</div>
            <div>developed by TSB M3DIA</div>
            <div>developed by TSB M3DIA</div>
          </div>
        </Flex>
      </div>
      <div style={{ width: "100%", marginBottom: "1rem" }}>
        <Flex flexDirection="row">
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
            <div>developed by TSB M3DIA</div>
            <div>developed by TSB M3DIA</div>
            <div>developed by TSB M3DIA</div>
          </div>
        </Flex>
      </div>
      <div style={{ width: "100%", marginBottom: "1rem" }}>
        <Flex flexDirection="row">
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
            <div>developed by TSB M3DIA</div>
            <div>developed by TSB M3DIA</div>
            <div>developed by TSB M3DIA</div>
          </div>
        </Flex>
      </div>

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
