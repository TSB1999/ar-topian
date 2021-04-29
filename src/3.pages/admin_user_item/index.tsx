import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../1.stores/UserContext";
import Flex from "../../5.elements/0.atoms/containers/flex";
import Proceed from "../../5.elements/0.atoms/buttons/proceed";
import Heading from "../../5.elements/0.atoms/text/heading";
import axios from "axios";
import { app } from "../../config";
export default function AdminUser(props) {
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
  const name = props.match.params.user;

  useEffect(() => {
    console.log(userData.current_patt.order);
  }, []);

  const addPatt = () => {
    const current = {
      ...userData.current_patt.order,
      patt: fileURL,
    };

    console.log(userData.orders, userData.current_patt.key);

    const updatedOrder = userData.orders;

    updatedOrder.splice(userData.current_patt.key, 1, current);

    console.log(updatedOrder);

    const body = {
      order: JSON.stringify(updatedOrder),
    };

    axios
      .post(`/order/update/${name}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userData.token,
        },
      })
      .then((res) => {
        console.log(res.data);
        props.history.push(`/admin/${name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFormChange = (e, key) => {
    switch (key) {
      case "image":
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
          console.log("uploaded a file", file.name);
        });
        const fileURL = `https://firebasestorage.googleapis.com/v0/b/ar-topian.appspot.com/o/${file.name}?alt=media`;
        setFileURL(fileURL);
        console.log(fileURL);
        setForm({
          ...form,
          image: fileURL,
        });
        break;
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
    console.log(fileURL);
  };

  return (
    <div style={{ background: "#7e7e7e" }}>
      <div style={{ paddingTop: "0.6rem" }}>
        <div
          style={{
            height: "35vh",
            width: "100%",
            backgroundImage: fileURL,
            marginBottom: "1rem",
          }}
        >
          <img
            style={{ height: "100%", width: "100%" }}
            src={userData.current_patt.order.image}
          />
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
            <label>PATT UPLOAD</label>
            <input
              type="file"
              name="image"
              onChange={(e) => handleFormChange(e, "image")}
            />
          </form>
        </div>

        <Flex flexDirection="column" backgroundColor="#000" color="#fff">
          <div style={{ padding: "1rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <Proceed icon="plus" label="SUBMIT" onClick={() => addPatt()} />
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
