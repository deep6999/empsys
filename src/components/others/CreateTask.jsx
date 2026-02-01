import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";

const CreateTask = () => {

  const { userData, adminData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    const taskObj = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const data = userData;
    data.forEach((elem) => {
      if (elem.firstName === assignTo) {
        elem.tasks.push(taskObj);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        
      }
    });
    
    setUserData(data);
    console.log(data);

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };
  return (
    <div className="bg-[#1c1c1c] w-full h-auto p-10 rounded-md mt-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2 flex flex-col gap-6 ">
          <div>
            <label
              htmlFor="taskName"
              className="block mb-1 text-xl font-semibold"
            >
              Task Title :
            </label>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="py-1 px-2 w-full rounded-md text-lg border-2 border-gray-400 focus:outline-none focus:border-emerald-500"
              type="text"
              id="taskName"
              name="taskName"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <label className="block mb-1 text-xl font-semibold" htmlFor="date">
              Date :
            </label>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="py-1 px-2 w-full rounded-md text-lg border-2 border-gray-400 focus:outline-none focus:border-emerald-500"
              type="date"
              id="date"
              name="date"
            />
          </div>
          <div>
            <label
              className="block mb-1 text-xl font-semibold"
              htmlFor="assignee"
            >
              Assign to :
            </label>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="py-1 px-2 w-full rounded-md text-lg border-2 border-gray-400 focus:outline-none focus:border-emerald-500"
              type="text"
              id="assignee"
              name="assignee"
              placeholder="Enter assignee name"
            />
          </div>
          <div>
            <label
              className="block mb-1 text-xl font-semibold"
              htmlFor="category"
            >
              Category :
            </label>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="py-1 px-2 w-full rounded-md text-lg border-2 border-gray-400 focus:outline-none focus:border-emerald-500"
              type="text"
              id="category"
              name="category"
              placeholder="dev, design, etc"
            />
          </div>
        </div>
        <div className="w-2/5 h-full flex flex-col items-start gap-6">
          <div className="w-full h-auto">
            <label
              htmlFor="description"
              className="block mb-1 text-xl font-semibold"
            >
              Description :
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="py-1 px-2 w-full h-75 rounded-md text-lg border-2 border-gray-400 focus:outline-none focus:border-emerald-500"
              id="description"
              name="description"
              placeholder="Enter task description"
              rows="4"
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="bg-emerald-500 w-full text-white text-lg font-bold py-2 px-6 rounded-md hover:bg-emerald-600 transition-colors cursor-pointer"
              type="submit"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
