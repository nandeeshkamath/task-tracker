
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from './components/aboutus';
import AddTask from './components/addtask';
import Footer from './components/footer';
import Header from "./components/header";
import Tasks from './components/tasks';


function App() {

  const [showAddButton, setShowAddButton] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const toggleAddButton = () => {
    setShowAddButton(!showAddButton)
  }

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // console.log(id)

    // const newTask = { id, ...task }

    // setTasks([...tasks, newTask])
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map(
        (task) =>
          task.id === id ?
            { ...task, reminder: data.reminder } :
            task)
    )
  }

  return (
    <Router>
      <div className="max-w-2xl min-h-full mx-72 mt-10 mb-10 h-full border border-solid border-blue-400 p-7 border-r-4 items-center">
        <Header title={'Nandeesh'} showAddButton={showAddButton} toggleAddButton={toggleAddButton} />
        <Route path='/' exact render={(props) => (
          <>
            {showAddButton && <AddTask addTask={addTask} toggleAddButton={toggleAddButton} />}
            <div className="pt-10">
            {tasks.length > 0 ?
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
              : 'No tasks to show'
            }
            </div>
          </>
        )} />
        <Route path='/about' component={AboutUs} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
