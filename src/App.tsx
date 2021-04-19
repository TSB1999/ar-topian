import { useState, useEffect } from "react";
// import "./4.styles/main.scss";
import { UserContext } from "./1.stores/UserContext";
import Navbar from "./5.elements/2.organisms/navbar";
import Alert from "./5.elements/0.atoms/misc/alert";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./3.pages/home";
import Register from "./3.pages/register";
import SignIn from "./3.pages/sign_in";
import ARtopian from "./3.pages/ar_topian";
import Shop from "./3.pages/shop";
import ShopItem from "./3.pages/shop_item";
import Basket from "./3.pages/basket";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState({
    loading: false,
    loggedIn: false,
    username: "",
  });

  const [items, setItems] = useState<any>([]);
  useEffect(() => {
    axios
      .get("/items", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setItems(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Alert />
        <UserContext.Provider value={{ userData, setUserData }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/ar-topian" component={ARtopian} />
          <Route exact path="/shop" component={() => Shop({ items })} />
          <Route exact path="/shop/:item" component={ShopItem} />
          <Route exact path="/basket" component={Basket} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
