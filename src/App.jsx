import React, { useState } from "react";
import Nav from "./Components/Nav";
import studentDataList from "./Data/StudentDataList";
import StudentReport from "./Components/StudentReport";



const App = () => {
  const [selectedId, setSelectedId] = useState(studentDataList[0].id);
  const selectedStudent = studentDataList.find(
    (student) => student.id === selectedId
  );
  console.log(selectedId);
  return (
    <div className="w-[100vw] min-h-[100vh] pb-5 bg-[#f7f6f6cc] overflow-x-hidden ">
      <Nav />

      <div className="px-4">
        {/* Dropdown */}
        <div className="mb-6 mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <label
            htmlFor="studentSelect"
            className="font-semibold text-gray-700"
          >
            Select Student :
          </label>
          <select
            id="studentSelect"
            value={selectedId}
            onChange={(e) => setSelectedId(Number(e.target.value))}
            className="w-full sm:w-auto px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f79d25] focus:border-[#f79d25] transition duration-200 "
          >
            {studentDataList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {/* Student Report Component */}
         <StudentReport student={selectedStudent}/>
          
      </div>
    </div>
  );
};

export default App;
