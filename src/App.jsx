import Header from "./components/Header/Header";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Maintable from "./components/Maintable/Maintable";
function App() {
  return (
    <>
      <div className="App" />
      <Header />

      <div className="Siderbar">
        <NavBar />
      </div>
      <div className="Table">
        <Maintable>/</Maintable>
      </div>
    </>
  );
}

export default App;
