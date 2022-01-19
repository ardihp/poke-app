import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Pokeball from "./components/Pokeball";
import Index from "./pages/Index";
import "./App.scss";

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Pokeball />
    </div>
  );
}

export default App;
