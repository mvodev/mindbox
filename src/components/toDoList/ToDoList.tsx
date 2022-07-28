import ToDoItem, { ToDoItemType } from "../toDoItem/ToDoItem";

type ToDoListPropsType = {
  toDoArray:Array<ToDoItemType>;
  handlerCompleted: (id:number)=>void;
}

const ToDoList = (props:ToDoListPropsType) => {
  const { toDoArray, handlerCompleted } = props;

  return (
    <ul className="todo-list">
      {
        toDoArray.map((elem)=>{
          return <ToDoItem 
                    title={elem.title}
                    completed={elem.completed}
                    id={elem.id}
                    key={elem.id}
                    handlerCompleted={handlerCompleted}
                  />
        })
      }
    </ul>
  )
};

export default ToDoList;