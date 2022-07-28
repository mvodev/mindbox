import React, { useState } from 'react';
import './ToDoInput.scss';

type ToDoInputProps = {
  handlerKeyPressed: (inputValue:string) => void;
}

const ToDoInput = (props:ToDoInputProps)=> {
  const {handlerKeyPressed} = props;
  const [input,setInput] = useState('')

  const handlerInputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setInput(event.target.value);
  }

  return (
    <div className="todo-add">
      <label className="todo-add__label">
        Добавить задачу
        <input 
          className="todo-add__input" 
          type="text" 
          name="todo-input"
          value={input}
          placeholder="Введите задачу и нажмите ввод" 
          onChange={handlerInputChange}
          onKeyDown={(event)=>{
            if (event.key==='Enter') {
              handlerKeyPressed(input);
              setInput('');
            }
          }}
        />  
    </label>
    </div>
  )
};

export default ToDoInput;