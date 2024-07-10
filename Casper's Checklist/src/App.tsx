import "./App.css";
import { ToDoItem, ToDoList } from "./Components";

function App() {
  return (
    <>
      <ToDoList projectName="Eat stuff">
        <ToDoItem item="Eat pancake" priority="Urgent" deadline="10-7-2024" />
        <ToDoItem item="Eat taco" priority="High" />
        <ToDoItem item="Eat parents" priority="Medium" />
      </ToDoList>
    </>
  );
}

export default App;
