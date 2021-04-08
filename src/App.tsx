import { useState } from "react";
// import "./4.styles/main.scss";
import { UserContext } from "./0.stores/UserContext";
import Navbar from "./4.elements/2.organisms/navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./2.pages/home";
import Register from "./2.pages/register";
import SignIn from "./2.pages/sign_in";
import Shop from "./2.pages/shop";
import Checkout from "./2.pages/checkout";

function App() {
  const [userData, setUserData] = useState("hellowee");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <UserContext.Provider value={{ userData, setUserData }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/shop" component={Shop} />
          {/* <Route exact path="/shop/item" component={Home} /> */}
          <Route exact path="/checkout" component={Checkout} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
