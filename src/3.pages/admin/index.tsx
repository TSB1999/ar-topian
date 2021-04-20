import React, { useState, useContext } from "react";
import UserContext from "../../1.stores/UserContext";
import Sort from "../../5.elements/1.molecules/query-filter";
import Grid from "../../5.elements/0.atoms/containers/grid";
import Flex from "../../5.elements/0.atoms/containers/flex";
import Proceed from "../../5.elements/0.atoms/buttons/proceed";
import SizeButton from "../../5.elements/0.atoms/buttons/size";
import { Link } from "react-router-dom";
import Heading from "../../5.elements/0.atoms/text/heading";

export default function SHOP__PAGE(props) {
  const [quantity, setQuantity] = useState(1);
  const { userData, setUserData } = useContext(UserContext);
  console.log(props.match.params);
  const name = props.match.params.item;

  const addItem = () => {
    //  add to local stoarage
    setUserData({
      ...userData,
      basket: [...userData.basket, userData.current],
    });
    props.history.push("/shop");
  };

  return (
    <div style={{ background: "#7e7e7e" }}>
      <div style={{ paddingTop: "0.6rem" }}>
        <div>
          <Heading label={name} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
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
          <Proceed icon="upload" label="UPLOAD AN ITEM" />
        </div>

        <Flex flexDirection="column">
          <div
            style={{ height: "35vh", backgroundColor: "red", width: "100%" }}
          >
            d
          </div>
        </Flex>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "0.7rem",
          }}
        >
          <form
            className="sign-in-form"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("hi");
            }}
          >
            <label>TYPE</label>
            <input
              type="email"
              name="email"
              //   onChange={(e) => handleSignInChange(e, "email")}
            />

            <label>NAME</label>
            <input
              name="name"
              //   onChange={(e) => handleSignInChange(e, "password")}
            />

            <label>PRICE</label>
            <input
              name="price"
              //   onChange={(e) => handleSignInChange(e, "password")}
            />

            <label>SMALL</label>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
              }}
            >
              <div style={{ flex: 1 }}></div>
              <div
                style={{
                  display: "flex",
                  flex: 3,
                  justifyContent: "space-around",
                }}
              >
                <button
                  onClick={() =>
                    setQuantity((quantity) =>
                      quantity !== 1 ? quantity - 1 : 1
                    )
                  }
                >
                  -
                </button>
                <button>{quantity}</button>
                <button onClick={() => setQuantity((quantity) => quantity + 1)}>
                  +
                </button>
              </div>
            </div>

            <label>MEDIUM</label>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
              }}
            >
              <div style={{ flex: 1 }}></div>
              <div
                style={{
                  display: "flex",
                  flex: 3,
                  justifyContent: "space-around",
                }}
              >
                <button
                  onClick={() =>
                    setQuantity((quantity) =>
                      quantity !== 1 ? quantity - 1 : 1
                    )
                  }
                >
                  -
                </button>
                <button>{quantity}</button>
                <button onClick={() => setQuantity((quantity) => quantity + 1)}>
                  +
                </button>
              </div>
            </div>

            <label>LARGE</label>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
              }}
            >
              <div style={{ flex: 1 }}></div>
              <div
                style={{
                  display: "flex",
                  flex: 3,
                  justifyContent: "space-around",
                }}
              >
                <button
                  onClick={() =>
                    setQuantity((quantity) =>
                      quantity !== 1 ? quantity - 1 : 1
                    )
                  }
                >
                  -
                </button>
                <button>{quantity}</button>
                <button onClick={() => setQuantity((quantity) => quantity + 1)}>
                  +
                </button>
              </div>
            </div>

            <label>EXTRA LARGE</label>
            <div
              style={{
                display: "flex",
                marginBottom: "1rem",
              }}
            >
              <div style={{ flex: 1 }}></div>
              <div
                style={{
                  display: "flex",
                  flex: 3,
                  justifyContent: "space-around",
                }}
              >
                <button
                  onClick={() =>
                    setQuantity((quantity) =>
                      quantity !== 1 ? quantity - 1 : 1
                    )
                  }
                >
                  -
                </button>
                <button>{quantity}</button>
                <button onClick={() => setQuantity((quantity) => quantity + 1)}>
                  +
                </button>
              </div>
            </div>

            <div className="sign-in-form__buttons">
              <div>
                <Link to="/">
                  {/* <SubmitButton label="back" theme="light" type="other" /> */}
                </Link>
              </div>
              <div>
                {/* <SubmitButton
                  type="sign in"
                  label="Sign In"
                  theme="dark"
                  handleSignInSubmit={handleSignInSubmit}
                /> */}
              </div>
            </div>
          </form>
        </div>

        <Flex flexDirection="column" backgroundColor="#000" color="#fff">
          <div style={{ padding: "1rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <Proceed icon="plus" label="ADD" onClick={() => addItem()} />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <Proceed icon="window-close" label="CANCEL" />
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
