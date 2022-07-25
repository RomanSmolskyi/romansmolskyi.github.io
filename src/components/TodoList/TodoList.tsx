import React from 'react';
import { ITodoData } from '../App/App';
import { TodoListItem } from '../TodoListItem';
import './TodoList.css';


interface ITodoList {
  todoData: ITodoData[];
  deleteItem: (id: number) => void;
  makeImporant: (id: number) => void;
  toggleDone: (id: number) => void;
  handleEdit: (id: number) => void;
}
// : ITodoList

export const TodoList = ({
  todoData,
  deleteItem,
  makeImporant,
  toggleDone,
  handleEdit,
}:  ITodoList): JSX.Element => {
  return (
    <ul className="todo-list">
      {todoData?.map((el: any) => (
        <TodoListItem
          key={el.id}
          imoprtant={el.important}
          dateOfCreation={el.dateOfCreation}
          dateDone={el.dateDone}
          done={el.done}
          label={el.label}
          deleteItem={() => deleteItem(el.id)}
          makeImporant={() => makeImporant(el.id)}
          toggleDone={() => toggleDone(el.id)}
          handleEdit={() => handleEdit(el.id)}
          dateOfUpdate={el.dateOfUpdate}
        />
      ))}
    </ul>
  );
};
