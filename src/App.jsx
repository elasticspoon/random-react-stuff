import "./App.css";
import { Nav } from "./Nav";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Sample } from "./Sample";
import { AnimalsList } from "./AnimalsList";

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Body />
        <Sample />
        <AnimalsList />
        <Footer />
      </div>
    </>
  );
}

export default App;
