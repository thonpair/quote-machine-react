import './App.css';
import QuoteBox from './QuoteBox';
import logo from "./assets/Kaamelott_Logo.png";

function App() {
  return (
    <div className="App">
      <div id="titles">
        <h1>Random Quote Machine</h1>
        <div id="logo-container">
          <img src={logo} alt="logo Kaamelott" />
        </div>
      </div>
      <QuoteBox></QuoteBox>
    </div>
  );
}

export default App;
