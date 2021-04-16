import { useState } from "react";
// import "./4.styles/main.scss";
import { UserContext } from "./1.stores/UserContext";
import Navbar from "./5.elements/2.organisms/navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./3.pages/home";
import Register from "./3.pages/register";
import SignIn from "./3.pages/sign_in";
import ARtopian from "./3.pages/ar_topian";
import Shop from "./3.pages/shop";
import ShopItem from "./3.pages/shop_item";
import Checkout from "./3.pages/checkout";

function App() {
  const [userData, setUserData] = useState({
    loading: false,
    loggedIn: false,
    username: "",
  });
  return (
    <div className="App">
      <Router>
        <Navbar />
        <UserContext.Provider value={{ userData, setUserData }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/ar-topian" component={ARtopian} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/item" component={ShopItem} />
          <Route exact path="/checkout" component={Checkout} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
