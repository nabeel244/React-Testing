// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Hook from "./Components/Hooks";
import Memo from "./Components/useMemo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function MyComponent({ name, nameForClass }) {
  return (
    <div>
      {name} {nameForClass}
    </div>
  );
}

function App() {
  return (
    <div data-testid="myrootdiv">
      <h1>Testing</h1>
      <input type="text" placehonder="type name" />
      <button>test buton</button>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <div className="App">
    //       <Header />

    //       <Route path="/" element={<Home />} />
    //       <Route path="/hooks" element={<Hook />} />
    //       <Hook />

    //     </div>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
