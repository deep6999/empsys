import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] mt-5 rounded px-5 py-4">
      <div className="bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-2xl font-bold w-1/5 text-white flex justify-center">
          Employee Name
        </h2>
        <h2 className="text-2xl font-bold w-1/5 text-white flex justify-center">
          New Tasks
        </h2>
        <h2 className="text-2xl font-bold w-1/5 text-white flex justify-center">
          Active Tasks
        </h2>
        <h2 className="text-2xl font-bold w-1/5 text-white flex justify-center">
          Completed Tasks
        </h2>
        <h2 className="text-2xl font-bold w-1/5 text-white flex justify-center">
          Failed Tasks
        </h2>
      </div>
      <div>
        {authData.userData.map(function(elem){ return (
          <div
            key={elem.id}
            className="flex justify-between items-center bg-gray-800 mb-2 py-2 px-4 rounded"
          >
            <h2 className="text-2xl font-semibold w-1/5 text-white flex justify-center">
              {elem.firstName}
            </h2>
            <h2 className="text-2xl font-semibold w-1/5 text-blue-400 flex justify-center">
              {elem.taskCounts.newTask}
            </h2>
            <h2 className="text-2xl font-semibold w-1/5 text-yellow-400 flex justify-center">
              {elem.taskCounts.active}
            </h2>
            <h2 className="text-2xl font-semibold w-1/5 text-green-400 flex justify-center">
              {elem.taskCounts.completed}
            </h2>
            <h2 className="text-2xl font-semibold w-1/5 text-red-400 flex justify-center">
              {elem.taskCounts.failed}
            </h2>
          </div>
        )})}
      </div>
    </div>
  );
};

export default AllTask;
