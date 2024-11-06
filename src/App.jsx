const App = () => {

  return (
      <>
          <div className="m-4 grid grid-cols-2">
              <div>
                  <label htmlFor="default-input"
                         className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Task</label>
                  <input type="text" id="default-input"
                         className="input_field"/>
              </div>
              <div className='mt-4'>
                  <button type="button"
                          className="dark_btn m-2">Add New Task
                  </button>
              </div>
          </div>
      </>
  )
}

export default App
