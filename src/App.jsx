import { useState } from "react";
import SelectNav from "./SelectNav";
import JobLists from "./JobLists";
import data from "/public/data.json";

const getData = data;
function App() {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilterClick = (data) => {
    if (!filteredData.includes(data)) {
      setFilteredData([...filteredData, data]);
    }
  };

  const handleDeleteItem = (id) => {
    const newData = filteredData.filter((items) => items !== id);
    setFilteredData(newData);
  };

  const handleDeleteAll = () => {
    setFilteredData([]);
  };
  return (
    <>
      <div className="mx-6 min-[1440px]:w-auto">
        <SelectNav
          filteredData={filteredData}
          onDelete={handleDeleteItem}
          onDeleteAll={handleDeleteAll}
        />

        {/* 
        March 26 2024

        Got filtered items form state and 
      passsed it into job list component as a prop to be used in
      filtering out the components... */}
        <JobLists
          filtered={filteredData}
          data={getData}
          onFilter={handleFilterClick}
        />
      </div>
    </>
  );
}

export default App;
