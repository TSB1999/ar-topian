import React, { useState, useEffect } from "react";
import axios from "axios";
import Flex from "../../5.elements/0.atoms/containers/flex";
import Grid from "../../5.elements/0.atoms/containers/grid";
import Sort from "../../5.elements/1.molecules/query-filter";
import { Link } from "react-router-dom";

export default function Shop({ items, ...props }) {
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

      <Grid noOfColumns={2} gridGap="1rem">
        {items.map((item: any, key) => {
          return (
            <Link to={`/shop/${item.name}`}>
              <div
                key={key}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "20vh",
                  width: "100%",
                }}
              >
                <div style={{ flex: 3, backgroundColor: "red" }}>
                  developed by TSB M3DIA
                </div>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    backgroundColor: "blue",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.name}
                </div>
              </div>
            </Link>
          );
        })}
      </Grid>

      <Flex flexDirection="column" backgroundColor="#000" color="#fff">
        <div className="shop__footer">
          <div>developed by TSB M3DIA</div>
        </div>
      </Flex>
    </div>
  );
}
