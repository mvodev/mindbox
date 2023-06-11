import './ToDoItem.scss';

export type ToDoItemType = {
  title: string;
  completed: boolean;
  id:number;
  handleCompleted: (id:number)=>void;
}

const ToDoItem = (props:ToDoItemType) => {
  const {title,completed,id,handleCompleted} = props;

  const handlerChecked = () => {
    handleCompleted(id);
  }

  return (
    <li className={completed ? "todo-item completed" : "todo-item"} key={id}>
      <span className="todo-item__title">{title}</span>
      <input 
        type="checkbox"
        checked={ completed }
        onChange={handlerChecked}
        className="todo-item__checkbox"/>
    </li>
    
  );
};

export default ToDoItem;