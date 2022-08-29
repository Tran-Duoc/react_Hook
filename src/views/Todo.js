const Todo = (props) => {
   // const todos = props.todos;
   let { todos, title, deleteDataTodo } = props;

   const handleDeleteTodo = (todo) => {
      console.log(">>> event is working", todo);
      deleteDataTodo(todo);
   };
   return (
      <div className="todo-container">
         {todos &&
            todos.length > 0 &&
            todos.map((items) => {
               return (
                  <div key={items.id}>
                     <li className="todo-child">
                        {items.id} - {items.title}
                        <span onClick={() => handleDeleteTodo(items)}>
                           &nbsp; X
                        </span>
                     </li>
                  </div>
               );
            })}
      </div>
   );
};

export default Todo;
