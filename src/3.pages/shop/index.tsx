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
    <div
      style={{ background: "#7e7e7e", minHeight: "90vh", padding: "1rem 0" }}
    >
      <Grid noOfColumns={2} gridGap="0.5rem">
        {items.map((item: any, key) => {
          return (
            <button
              key={key}
              onClick={() => toItem(item)}
              style={{
                margin: "0.5rem",
                border: "0.15rem solid #cecece",
                background: "#fff",
                borderRadius: "0.4rem",
                boxShadow: "0.3rem 0.3rem 0.2rem #292929",
              }}
            >
              <div
                key={key}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "20vh",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    // background: "red",
                    justifyContent: "space-evenly",
                    borderRight: "0.1rem solid #1a1a1a ",
                    paddingRight: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      border: "1px solid #1a1a1a",
                      borderRadius: "0.3rem",

                      color: "#1a1a1a",
                      fontWeight: "bold",
                      padding: "0.2rem",
                      boxShadow: "0.1rem 0.1rem 0.2rem grey",
                    }}
                  >
                    <div style={{ flex: 1, borderRight: "0.1rem solid #fff" }}>
                      S
                    </div>

                    <div style={{ flex: 1 }}>{item.small}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      border: "1px solid #1a1a1a",
                      borderRadius: "0.3rem",

                      color: "#1a1a1a",
                      fontWeight: "bold",
                      padding: "0.2rem",
                      boxShadow: "0.1rem 0.1rem 0.2rem grey",
                    }}
                  >
                    <div style={{ flex: 1, borderRight: "0.1rem solid #fff" }}>
                      M
                    </div>

                    <div style={{ flex: 1 }}>{item.medium}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      border: "1px solid #1a1a1a",
                      borderRadius: "0.3rem",

                      color: "#1a1a1a",
                      fontWeight: "bold",
                      padding: "0.2rem",
                      boxShadow: "0.1rem 0.1rem 0.2rem grey",
                    }}
                  >
                    <div style={{ flex: 1, borderRight: "0.1rem solid #fff" }}>
                      L
                    </div>

                    <div style={{ flex: 1 }}>{item.large}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      border: "1px solid #1a1a1a",
                      borderRadius: "0.3rem",
                      color: "#1a1a1a",
                      fontWeight: "bold",
                      padding: "0.2rem",
                      boxShadow: "0.1rem 0.1rem 0.2rem grey",
                    }}
                  >
                    <div style={{ flex: 1, borderRight: "0.1rem solid #fff" }}>
                      X
                    </div>

                    <div style={{ flex: 1 }}>{item.extra_large}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 3,
                  }}
                >
                  <div
                    style={{
                      margin: "0.2rem",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "0.7rem",
                      color: "#292929",
                      fontWeight: "bold",
                      borderRadius: "0.2rem",
                      fontFamily: "Arial Rounded MT Bold",
                    }}
                  >
                    {item.name}
                  </div>
                  <img
                    src={item.image}
                    style={{
                      height: "25vw",
                      width: "25vw",
                      justifySelf: "center",
                      alignSelf: "center",
                      borderRadius: "0.4rem",
                      margin: "0.4rem",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      backgroundColor: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#292929",
                      fontWeight: "bold",
                    }}
                  >
                    £{item.price}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </Grid>
    </div>
  );
}
