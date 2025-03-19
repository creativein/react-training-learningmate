import "./App.css";
import ClassComponent from "./components/class-component";
import FunComponent from "./components/fun-component";
import ColorMe from "./day_one/ColorMe";


function App() {
  return (
    <div className="App">
      <div>
        <h2>Understanding React Component Lifecycle</h2>
        <ClassComponent />
        <FunComponent number={1} />
      </div>

      <ColorMe/>
    </div>
  );
}

export default App;
