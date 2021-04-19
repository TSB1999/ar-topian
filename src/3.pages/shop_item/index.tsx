import React from "react";
import Sort from "../../5.elements/1.molecules/query-filter";
import Grid from "../../5.elements/0.atoms/containers/grid";
import Flex from "../../5.elements/0.atoms/containers/flex";
import Proceed from "../../5.elements/0.atoms/buttons/proceed";
import SizeButton from "../../5.elements/0.atoms/buttons/size";

export default function SHOP__PAGE() {
  return (
    <div>
      <div className="shop">
        <div
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Sort setting="high to low" />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <Proceed icon="upload" label="UPLOAD A SHORT CLIP" />
        </div>

        <Flex flexDirection="column">
          <div style={{ height: "40vh" }}></div>
        </Flex>

        <Flex flexDirection="row">
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
        </Flex>

        <Flex flexDirection="column" backgroundColor="#000" color="#fff">
          <div className="shop__footer">
            <div style={{ marginBottom: "1rem" }}>${`desc}`}</div>
            <div style={{ marginBottom: "1rem" }}>
              <Proceed icon="shopping-basket" label="PROCEED TO CHECKOUT" />
            </div>
            <div>developed by TSB M3DIA</div>
          </div>
        </Flex>
      </div>
    </div>
  );
}
