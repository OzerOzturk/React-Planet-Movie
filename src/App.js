import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav/MainNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Header />
        <div className="app"></div>
        <Container>
          <Route path="/" element={<Trending />} index />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
        </Container>
        <SimpleBottomNavigation />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
