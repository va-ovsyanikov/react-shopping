import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./componets/Header";
import { Section } from "./componets/Section";
import { Context } from "./componets/Context";
import {Footer} from './componets/Footer'

function App() {
  return (
    <Context>
      <Router>
        <div className="app">
          <Header />
          <Section />
          <Footer />
        </div>
      </Router>
    </Context>
  );
}

export default App;
