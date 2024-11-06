import {useState} from "react";

const App = () => {
  const [task, setTask] = useState('')

  const handleInput = (event) => {
    setTask(event.target.value)
  }

  const addTask = () => {
    console.log(task)
  }

  return (
    <>
      <div className="m-4 grid grid-cols-2">
        <div>
          <label
            htmlFor="default-input"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Task
          </label>
          <input type="text" name='task' onChange={handleInput} className="input_field" />
        </div>
        <div className="mt-4">
          <button
              type="button"
              className="dark_btn m-2"
              onClick={() => addTask()}
          >
            Add New Task
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
