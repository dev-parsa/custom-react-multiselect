import Select from "./Select";
import "./styles/app.css";
const options = [
  { name: "first", id: 1 },
  { name: "second", id: 2 },
  { name: "third", id: 3 },
  { name: "fourth", id: 4 },
  { name: "fifth", id: 5 },
];
function App() {
  return (
    <div className="app">
      <p>React Multi Select:</p>
      <Select options={options} />
    </div>
  );
}

export default App;
