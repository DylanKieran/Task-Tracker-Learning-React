import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting',
        day: 'April 26th at 12:30pm',
        reminder: true
    },
    {
      id: 2,
      text: 'Doctors Appointment',
      day: 'March 2nd at 9am',
      reminder: true
    },
    {
      id: 3,
      text: 'Dentist Appointment',
      day: 'May 31st at 11:30am',
      reminder: false
    }
  ])

  //Delete Tasks
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id == id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header></Header>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : 'No Tasks'}
    </div>
  );
}

export default App;
