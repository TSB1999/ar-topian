import "./styles/main.scss";
import Navbar from "./elements/2.organisms/navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import SignIn from "./pages/sign_in";
import Shop from "./pages/shop";
import Checkout from "./pages/checkout";

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
