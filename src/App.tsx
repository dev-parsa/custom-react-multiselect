import Select from "./Select";
import "./styles/app.css";
const options = [
  { name: "React", id: 1 },
  { name: "Vue", id: 2 },
  { name: "Anuglar", id: 3 },
  { name: "Solid", id: 4 },
  { name: "Svelte", id: 5 },
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
