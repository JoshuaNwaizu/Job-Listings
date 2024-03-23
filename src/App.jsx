import { useState } from "react";
import SelectNav from "./SelectNav";
import JobLists from "./JobLists";

function App() {
  return (
    <div className="mx-6">
      <SelectNav />
      <JobLists />
    </div>
  );
}

export default App;
