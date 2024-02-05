import "./App.css";
import { Nav } from "./Nav";
import { Body } from "./Body";
import { Footer } from "./Footer";
// import { Sample } from "./Sample";
// import { AnimalsList } from "./AnimalsList";
import { Person } from "./Person";

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Body />
        {/* <Sample /> */}
        {/* <AnimalsList /> */}
        <Person />
        <Footer />
      </div>
    </>
  );
}

export default App;
