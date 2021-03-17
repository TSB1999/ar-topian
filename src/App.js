import "./styles/main.scss";
import Navbar from './elements/organisms/navbar/'
import Landing from './elements/organisms/landing/'
import LandingButtons from './elements/molecules/landing-buttons'

function App() {
  return <div className="App">
    <Navbar/>
    {/* <LandingButtons/> */}
    <Landing/>

  </div>;
}

export default App;
