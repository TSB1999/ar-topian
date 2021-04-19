import React from "react";
import Flex from "../../5.elements/0.atoms/containers/flex";
import Grid from "../../5.elements/0.atoms/containers/grid";
import Sort from "../../5.elements/1.molecules/query-filter";

export default function Shop() {
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

      <Grid noOfColumns={2} gridGap="1rem">
        <div
          style={{ height: "20vh", width: "100%", backgroundColor: "red" }}
        ></div>
        <div
          style={{ height: "20vh", width: "100%", backgroundColor: "red" }}
        ></div>
        <div
          style={{ height: "20vh", width: "100%", backgroundColor: "red" }}
        ></div>
      </Grid>

      <Flex flexDirection="column" backgroundColor="#000" color="#fff">
        <div className="shop__footer">
          <div>developed by TSB M3DIA</div>
        </div>
      </Flex>
    </div>
  );
}
