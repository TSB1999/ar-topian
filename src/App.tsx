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
import Admin from "./3.pages/admin";
import AdminUser from "./3.pages/admin_user";
import AdminUserItem from "./3.pages/admin_user_item";
import axios from "axios";

function App() {
  const initialState = localStorage.getItem("state")
    ? {
        loading: JSON.parse(localStorage.getItem("state") as any).loading,
        loggedIn: JSON.parse(localStorage.getItem("state") as any).loggedIn,
        username: JSON.parse(localStorage.getItem("state") as any).username,
        basket: JSON.parse(localStorage.getItem("state") as any).basket,
        items: JSON.parse(localStorage.getItem("state") as any).items,
        current: JSON.parse(localStorage.getItem("state") as any).current,
        token: JSON.parse(localStorage.getItem("state") as any).token,
      }
    : {
        loading: false,
        loggedIn: false,
        username: "",
        basket: [],
        items: [],
        current: {},
        token: "",
      };
  const [userData, setUserData] = useState(initialState);

  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(userData));
    // console.log(userData);
  }, [userData]);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("state") as any));

    axios
      .get("/items", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUserData({
          ...userData,
          items: res.data,
        });
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <Alert />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/ar-topian" component={ARtopian} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:item" component={ShopItem} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/:user" component={AdminUser} />
          <Route exact path="/admin/:user/:image" component={AdminUserItem} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
