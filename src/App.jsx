import { useState } from "react";
import SelectNav from "./SelectNav";
import JobLists from "./JobLists";
import data from "/public/data.json";

const getData = data;
const id = Math.floor(Math.random() * 100) + 1;
function App() {
  const [inputData, setInputData] = useState([]);

  const handleClick = (item) => {
    if (!inputData.includes(item)) {
      setInputData((newInputs) => [...newInputs, item]);
    }
    console.log(item);
  };

  const handleDeleteItem = (id) => {
    setInputData((newInputs) => newInputs.filter((item) => item.id !== id));
    console.log(id);
  };
  return (
    <div className="mx-6">
      <SelectNav inputData={inputData} onDelete={handleDeleteItem} />
      <JobLists data={getData} onHandleClick={handleClick} />
    </div>
  );
}

export default App;
