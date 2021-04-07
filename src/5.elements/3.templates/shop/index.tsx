import React from "react";
import Sort from "../../1.molecules/sorting-filter";
import Container from "../../0.atoms/containers";
import Proceed from "../../0.atoms/buttons/proceed";
import SizeButton from "../../0.atoms/buttons/size";

interface ShopTemplateProps {
  total: number;
}

export const Shop: React.FC<ShopTemplateProps> = ({
  total = "VE",
  ...props
}) => {
  return (
    <div
      style={{
        background: "#737373",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
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
        >
          fwerfe
        </Container>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SizeButton label="S" selected={false} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SizeButton label="M" selected={true} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SizeButton label="L" selected={false} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
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
