import "./styles/main.scss";
import Navbar from './elements/organisms/navbar/'
import Button from './elements/atoms/buttons'

function App() {
  return <div className="App">
    <Navbar/>
    <Button title = "REGISTER"/>
    <Button title = "SIGN IN"/>
  </div>;
}

export default App;
