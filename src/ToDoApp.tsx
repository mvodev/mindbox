import { useEffect, useState } from 'react';
import ToDoInput from './components/toDoInput/ToDoInput';
import { ToDoItemType } from './components/toDoItem/ToDoItem';
import ToDoList from './components/toDoList/ToDoList';
import './ToDoApp.scss';

const ToDoApp = () => {
  const [todoState, setTodoState] = useState<ToDoItemType[]>([]);
  const [filteredState, setFilteredState] = useState<ToDoItemType[]>([]);
  const [showCompleted,setShowCompleted] = useState(false);
  const [showIncompleted,setShowIncompleted] = useState(false);

  const handleCompleted = (id:number) => {
    const newState = todoState.map(elem=>{
      if(elem.id === id) elem.completed = !elem.completed;
      return elem;
    })
    setTodoState(newState);
    setFilteredState(newState);
  }

  const handleInput = (inputValue:string) => {
    const newCase: ToDoItemType = {
      title:inputValue,
      completed:false,
      id:Date.now(),
      handleCompleted
    }
    setTodoState(prev => [newCase,...prev]);
    setFilteredState(prev => [newCase,...prev]);
  }

  useEffect(() => {
    if (showCompleted) {
      setFilteredState(todoState.filter(elem=>elem.completed === true));
    }
    else if (showIncompleted) {
      setFilteredState(todoState.filter(elem=>elem.completed === false));
    } else {
      setFilteredState(todoState);
    }
  },[showCompleted,showIncompleted,todoState])

  return (
    <section className="todo">
      <h1 className="todo__header">Тестовое задание для Mindbox</h1>
      <ToDoInput handlerKeyPressed = {handleInput}/>
      <div className="todo__filter-wrapper">
        <label className="todo__filter">
          Показать только завершенные
          <input 
            type="checkbox" 
            checked={showCompleted}
            onChange={
              () => {
                setShowCompleted(!showCompleted);
                if(showIncompleted){
                  setShowIncompleted(false);
                }
              }
            }
          />
        </label>
        <label className="todo__filter">
          Показать только незавершенные
          <input 
            type="checkbox" 
            checked={showIncompleted}
            onChange={
              () => {
                setShowIncompleted(!showIncompleted);
                if(showCompleted){
                  setShowCompleted(false);
                }
              }
            }
          />
        </label>
      </div>
      <ToDoList toDoArray={filteredState} handleCompleted={handleCompleted}/>
      <span>
        {`Всего дел: ${todoState.length}  `}
        {`Завершенных: ${todoState.filter(todo=>todo.completed).length}`}
        {` Незавершенных: ${todoState.filter(todo=>!todo.completed).length}`}
      </span>
    </section>
  );
}

export default ToDoApp;
