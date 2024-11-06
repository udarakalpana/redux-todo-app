import {useState} from "react";
import {storeTask} from "./utlities/state/taskSlice.js";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()
  const alreadyAddTask = useSelector((state) => state.tasks.tasks)

  const handleInput = (event) => {
    setTask(event.target.value)
  }

  const addTask = () => {
    dispatch(storeTask(task))

    setTask('')
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
          <input type="text" name='task' value={task} onChange={handleInput} className="input_field" />
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

      <div className='m-4'>
        {alreadyAddTask.length > 0 && alreadyAddTask.map((task) => (
            <div key={task.id}>
              <p className='inline'>{task.task}</p>
              <button className='inline ml-4 border border-red-500 m-1 p-1'>Remove</button>
            </div>
        ))}
      </div>
    </>
  );
};

export default App;
