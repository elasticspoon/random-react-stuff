import "./App.css";
import { Nav } from "./Nav";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Sample } from "./Sample";

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Body />
        <Sample />
        <Footer />
      </div>
    </>
  );
}

export default App;
