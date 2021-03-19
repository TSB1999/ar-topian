import "./styles/main.scss";
import Navbar from "./elements/2.organisms/navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./elements/4.pages/home";
import Register from "./elements/4.pages/register";
import SignIn from "./elements/4.pages/sign_in";
import Shop from "./elements/4.pages/shop";
import Checkout from "./elements/4.pages/checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/shop" component={Shop} />
        {/* <Route exact path="/shop/item" component={Home} /> */}
        <Route exact path="/checkout" component={Checkout} />
      </Router>
    </div>
  );
}

export default App;
