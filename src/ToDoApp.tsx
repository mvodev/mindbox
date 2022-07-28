import React, { useEffect, useState } from 'react';

import ToDoInput from './components/toDoInput/ToDoInput';
import ToDoItem, { ToDoItemType } from './components/toDoItem/ToDoItem';
import ToDoList from './components/toDoList/ToDoList';
import './ToDoApp.scss';

const ToDoApp = () => {
  const [todoState, setTodoState] = useState<ToDoItemType[]>([]);
  const [filteredState, setFilteredState] = useState<ToDoItemType[]>([]);
  const [showCompleted,setShowCompleted] = useState(false);

  const handlerCompleted = (id:number) => {
    const newState = todoState.map(elem=>{
      if(elem.id === id) elem.completed = !elem.completed;
      return elem;
    })
    
    setTodoState(newState);
    setFilteredState(newState);
  }

  const handlerInput = (inputValue:string) => {
    const newCase: ToDoItemType = {
      title:inputValue,
      completed:false,
      id:Date.now(),
      handlerCompleted
    }
    setTodoState(prev => [newCase,...prev]);
    setFilteredState(prev => [newCase,...prev]);
  }

  useEffect(()=>{
    if (showCompleted) {
      setFilteredState(todoState.filter((elem)=>{
        return elem.completed!==false
      }));
    } else {
      setFilteredState(todoState);
    }
  },[showCompleted,todoState])

  return (
    <section className="todo">
      <h1 className="todo__header">Тестовое задание для Mindbox</h1>
      <ToDoInput handlerKeyPressed = {handlerInput}/>
        <label className="todo__filter">
          Показать только завершенные
          <input 
            type="checkbox" 
            checked={showCompleted}
            onChange={
              () => setShowCompleted(!showCompleted)
            }
          />
        </label>
      <ToDoList toDoArray={filteredState} handlerCompleted={handlerCompleted}/>
    </section>
  );
}

export default ToDoApp;
