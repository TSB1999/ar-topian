import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../1.stores/UserContext";
import axios from "axios";
import Flex from "../../5.elements/0.atoms/containers/flex";
import Grid from "../../5.elements/0.atoms/containers/grid";
import Sort from "../../5.elements/1.molecules/query-filter";
import { Link } from "react-router-dom";

export default function Shop(props) {
  const { userData, setUserData } = useContext(UserContext);
  const items = userData.items;

  const toItem = (item) => {
    props.history.push(`/shop/${item.name}`);
    setUserData({
      ...userData,
      current: item,
    });
  };

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

      <Grid noOfColumns={2} gridGap="0.5rem">
        {items.map((item: any, key) => {
          return (
            <button
              onClick={() => toItem(item)}
              style={{
                margin: "0.5rem",
                border: "0.15rem solid #cecece",
                background: "#292929",
                borderRadius: "0.4rem",
              }}
            >
              <div
                key={key}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "20vh",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flex: 0.8,
                    backgroundColor: "#292929",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </div>
                <img
                  src={item.image}
                  style={{
                    height: "70%",
                    width: "85%",
                    justifySelf: "center",
                    alignSelf: "center",
                    borderRadius: "0.4rem",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    backgroundColor: "#292929",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  $ {item.price}
                </div>
              </div>
            </button>
          );
        })}
      </Grid>

      <Flex flexDirection="column" backgroundColor="#000" color="#fff">
        <div className="shop__footer" style={{ padding: "1rem" }}>
          <div style={{ fontWeight: "bold" }}>developed by TSB M3DIA</div>
        </div>
      </Flex>
    </div>
  );
}
