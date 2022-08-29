import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="app" className="bg-zinc-800 text-white">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="content">Content</div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
