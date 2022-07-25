import React from 'react';
import './TodoHeader.css';

interface ITodoHeader {
  activeTodos: number;
  doneTodos: number;
  checkToggle: boolean;
}

export const TodoHeader = ({
  activeTodos,
  doneTodos,
  checkToggle,
}: ITodoHeader): JSX.Element => {
  return (
    <div className="todo-header">
      <h1>ToDo List</h1>
      {checkToggle && (
        <span>
          Active: {activeTodos} Done: {doneTodos}
        </span>
      )}
    </div>
  );
};
