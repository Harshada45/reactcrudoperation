import logo from "./logo.svg";
import "./App.css";
import Create from "./components/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
