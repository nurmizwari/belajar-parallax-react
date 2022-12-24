import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Gambar1 } from "./components/Gambar1";
import { Gambar2 } from "./components/Gambar2";
import { Gambar3 } from "./components/Gambar3";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Gambar1 />
      <Gambar2 />
      <Gambar3 />
      <Footer />
    </div>
  );
}

export default App;
