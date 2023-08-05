import "./App.css";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    // Add more options as needed
  ];

  const handleSelectChange = (selectedValue) => {
    console.log("Selected value:", selectedValue);
    // Do something with the selected value here
  };
  return (
    <div className="App">
      <Header></Header>
      <Dropdown options={options} onChange={handleSelectChange}></Dropdown>
    </div>
  );
}

export default App;
