import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "./components/Header";
import Pokeball from "./components/Pokeball";
import Index from "./pages/Index";
import "./App.scss";
import Detail from "./pages/detail";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <div className="main-content">
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="pokemon/:name" element={<Detail />} />
            </Routes>
          </QueryClientProvider>
        </div>
      </div>
      <Pokeball />
    </div>
  );
}

export default App;
