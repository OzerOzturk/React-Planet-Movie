import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav/MainNav";

function App() {
  return (
    <>
      <Header />
      <div className="app"></div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;