import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const Dropdown = ({ options, onChange }) => {
  const styles = {
    height: "80px",
    justifyContent: "start",
    alignItems: "center",
    display: "flex",
    padding: "20px",
    background: "#c4c4c4",
    boxSizing: "border-box",
  };

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  useEffect(() => {
    // Path to your CSV file
    const csvFile = "../data/population.csv";
    // Using d3.csv() to load the CSV data
    d3.csv(csvFile)
      .then((data) => {
        // Data loaded successfully, you can now work with it
        console.log(data);
        // Do other data processing or rendering here
      })
      .catch((error) => {
        // Handle any error that occurred during loading
        console.error("Error loading CSV:", error);
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    // Call the onChange callback function (if provided) to pass the selected value back to the parent component
    if (onChange) {
      onChange(selectedOption);
    }
  };

  return (
    <div style={styles}>
      <select value={selectedValue} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
