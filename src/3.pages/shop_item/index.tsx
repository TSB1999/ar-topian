import React from "react";
import Sort from "../../5.elements/1.molecules/query-filter";
import Grid from "../../5.elements/0.atoms/containers/grid";
import Flex from "../../5.elements/0.atoms/containers/flex";
import Proceed from "../../5.elements/0.atoms/buttons/proceed";
import SizeButton from "../../5.elements/0.atoms/buttons/size";
import { Link } from "react-router-dom";

export default function SHOP__PAGE() {
  return (
    <div style={{ background: "#7e7e7e" }}>
      <div className="shop">
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
          <div style={{ height: "40vh" }}></div>
        </Flex>

        <Grid noOfColumns={4} backgroundColor="#C4C4C4" padding="1rem">
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
        </Grid>

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
            <div style={{ marginBottom: "1rem" }}>
              <Proceed icon="plus" label="ADD ANOTHER" />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <Proceed icon="window-close" label="CANCEL" />
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
