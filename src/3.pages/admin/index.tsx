import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../1.stores/UserContext";
import Sort from "../../5.elements/1.molecules/query-filter";
import Grid from "../../5.elements/0.atoms/containers/grid";
import Flex from "../../5.elements/0.atoms/containers/flex";
import Proceed from "../../5.elements/0.atoms/buttons/proceed";
import SizeButton from "../../5.elements/0.atoms/buttons/size";
import { Link } from "react-router-dom";
import Heading from "../../5.elements/0.atoms/text/heading";
import axios from "axios";
import { app } from "../../config";

export default function SHOP__PAGE(props) {
  const [fileURL, setFileURL] = useState("");
  const [form, setForm] = useState({
    type: "",
    small: 1,
    medium: 1,
    large: 1,
    extra_large: 1,
    name: "",
    price: 0,
    image: "",
  });
  const { userData, setUserData } = useContext(UserContext);
  // console.log(props.match.params);
  const name = props.match.params.item;

  useEffect(() => {
    // console.log(form);
  }, [form]);

  const addItem = () => {
    //  add to local stoarage

    // console.log([form, JSON.parse(localStorage.getItem("state") as any)]);
    axios
      .post("/item", form, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userData.token,
        },
      })
      .then((res) => {
        console.log(res.data);
        // setUserData({
        //   ...userData,
        //   items: res.data,
        // });
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFormChange = (e, key) => {
    switch (key) {
      case "type":
        setForm({
          ...form,
          type: e.target.value,
        });
        break;
      case "name":
        setForm({
          ...form,
          name: e.target.value,
        });
        break;
      case "price":
        setForm({
          ...form,
          price: e.target.value,
        });
        break;
      case "image":
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
          console.log("uploaded a file", file.name);
        });
        const fileURL = `https://firebasestorage.googleapis.com/v0/b/ar-topian.appspot.com/o/${file.name}?alt=media`;
        setFileURL(fileURL);
        // console.log(fileURL);
        setForm({
          ...form,
          image: fileURL,
        });
        break;
      case "small_minus":
        setForm({
          ...form,
          small: form.small !== 1 ? form.small - 1 : 1,
        });
        break;
      case "small_plus":
        setForm({
          ...form,
          small: form.small + 1,
        });
        break;
      case "medium_minus":
        setForm({
          ...form,
          medium: form.medium !== 1 ? form.medium - 1 : 1,
        });
        break;
      case "medium_plus":
        setForm({
          ...form,
          medium: form.medium + 1,
        });
        break;
      case "large_minus":
        setForm({
          ...form,
          large: form.large !== 1 ? form.large - 1 : 1,
        });
        break;
      case "large_plus":
        setForm({
          ...form,
          large: form.large + 1,
        });
        break;
      case "extra_large_minus":
        setForm({
          ...form,
          extra_large: form.extra_large !== 1 ? form.extra_large - 1 : 1,
        });
        break;
      case "extra_large_plus":
        setForm({
          ...form,
          extra_large: form.extra_large + 1,
        });
        break;
      default:
    }
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("uploaded a file", file.name);
    });
    const fileURL = `https://firebasestorage.googleapis.com/v0/b/ar-topian.appspot.com/o/${file.name}?alt=media`;
    setFileURL(fileURL);
    // console.log(fileURL);
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
              // type="email"
              name="type"
              onChange={(e) => handleFormChange(e, "type")}
            />

            <label>NAME</label>
            <input name="name" onChange={(e) => handleFormChange(e, "name")} />

            <label>IMAGE UPLOAD</label>
            <input
              type="file"
              name="image"
              onChange={(e) => handleFormChange(e, "image")}
            />
            <div
              style={{
                height: "35vh",
                width: "100%",
                backgroundImage: fileURL,
                marginBottom: "1rem",
              }}
            >
              <img style={{ height: "100%", width: "100%" }} src={fileURL} />
            </div>

            <label>PRICE</label>
            <input
              name="price"
              onChange={(e) => handleFormChange(e, "price")}
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
                <button onClick={() => handleFormChange("", "small_minus")}>
                  -
                </button>
                <button>{form.small}</button>
                <button onClick={() => handleFormChange("", "small_plus")}>
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
                <button onClick={() => handleFormChange("", "medium_minus")}>
                  -
                </button>
                <button>{form.medium}</button>
                <button onClick={() => handleFormChange("", "medium_plus")}>
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
                <button onClick={() => handleFormChange("", "large_minus")}>
                  -
                </button>
                <button>{form.large}</button>
                <button onClick={() => handleFormChange("", "large_plus")}>
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
                  onClick={() => handleFormChange("", "extra_large_minus")}
                >
                  -
                </button>
                <button>{form.extra_large}</button>
                <button
                  onClick={() => handleFormChange("", "extra_large_plus")}
                >
                  +
                </button>
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
