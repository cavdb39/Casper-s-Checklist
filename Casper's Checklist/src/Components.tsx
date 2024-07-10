import React, { useState } from "react";

interface ListItemProps {
  deadline?: string;
  item: string;
  priority?: "Urgent" | "High" | "Medium" | "Low" | "No Priority";
}

const ToDoItem = ({
  item,
  priority = "No Priority",
  deadline,
}: ListItemProps) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompletedChange = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <>
      <li className={`toDoItem ${isCompleted ? "completed" : ""}`}>
        <div>
          <input
            type="checkbox"
            id="check"
            checked={isCompleted}
            onChange={() => {
              handleCompletedChange();
            }}
          />
          <label htmlFor="check" className="taskName">{item}</label>
        </div>
        <div>
          <p>Priority: {priority}</p>
          {deadline && <p>Deadline: {deadline}</p>}
        </div>
      </li>
      <hr className="toDoDivider" />
    </>
  );
};

interface ToDoListProps {
  children: React.ReactNode;
  projectName: string;
}

const ToDoList = ({ children, projectName }: ToDoListProps) => {
  return (
    <div>
      <h2>Project: {projectName}</h2>
      <ul className="toDoList">
        <hr className="toDoDivider" />
        {React.Children.map(children, (child, index) => (
          <span key={index}>{React.isValidElement(child) ? child : null}</span>
        ))}
      </ul>
    </div>
  );
};

export { ToDoItem, ToDoList };
