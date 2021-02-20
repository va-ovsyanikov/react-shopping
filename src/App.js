import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./componets/Header";
import { Section } from "./componets/Section";
import { Context } from "./componets/Context";

function App() {
  return (
    <Context>
      <Router>
        <div className="app">
          <Header />
          <Section />
        </div>
      </Router>
    </Context>
  );
}

export default App;
