import React from "react";
import Sort from "../../1.molecules/query-filter";
import Container from "../../0.atoms/containers";
import Proceed from "../../0.atoms/buttons/proceed";
import SizeButton from "../../0.atoms/buttons/size";

import "./styles.css";

interface ShopTemplateProps {
  total: number;
}

export const Shop: React.FC<ShopTemplateProps> = ({ total, ...props }) => {
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

      <div style={{ marginBottom: "1rem" }}>
        <Container
          display="grid"
          height="40vh"
          width="80vw"
          backgroundColor="#C4C4C4"
        ></Container>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Proceed icon="upload" label="UPLOAD A SHORT CLIP" />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Container
          display="grid"
          height="15vh"
          width="80vw"
          backgroundColor="#C4C4C4"
          noOfColumns={4}
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
        </Container>
      </div>

      <div>
        <Container
          display="grid"
          height="20vh"
          width="100vw"
          backgroundColor="#000"
          noOfColumns={1}
          noOfRows={3}
          color="#fff"
        >
          <div className="shop__footer">
            <div style={{ marginBottom: "1rem" }}>${` ${total}`}</div>
            <div style={{ marginBottom: "1rem" }}>
              <Proceed icon="shopping-basket" label="PROCEED TO CHECKOUT" />
            </div>
            <div>developed by TSB M3DIA</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Shop;
