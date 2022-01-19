import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "./components/Header";
import Index from "./pages/Index";
import "./App.scss";
import Detail from "./pages/detail";
import MyPokemon from "./pages/MyPokemon";
import ScrollTop from "./components/ScrollTop";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="container">
      <ScrollTop />
      <Header />
      <div className="main">
        <div className="main-content">
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="pokemon/:name" element={<Detail />} />
              <Route path="my-pokemon" element={<MyPokemon />} />
            </Routes>
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
