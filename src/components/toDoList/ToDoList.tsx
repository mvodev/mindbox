import ToDoItem, { ToDoItemType } from "../toDoItem/ToDoItem";

type ToDoListPropsType = {
  toDoArray:Array<ToDoItemType>;
  handleCompleted: (id:number)=>void;
}

const ToDoList = (props:ToDoListPropsType) => {
  const { toDoArray, handleCompleted } = props;

  return (
    <ul className="todo-list">
      {
        toDoArray.map((elem)=>{
          return <ToDoItem 
                    title={elem.title}
                    completed={elem.completed}
                    id={elem.id}
                    key={elem.id}
                    handleCompleted={handleCompleted}
                  />
        })
      }
    </ul>
  )
};

export default ToDoList;