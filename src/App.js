import { useContext } from "react";
import "./App.css";
import Characters from "./Components/Characters";
import Header from "./Components/Header";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const color = useContext(ThemeContext)

  return (
    <div className="App" style={{color}} >
      <Header />
      <Characters />
    </div>
  );
}

export default App;
