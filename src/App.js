import './App.css';
import AddTask from './Components/AddTask/AddTask.js'
import ListTask from './Components/ListTask/ListTask.js';

function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
