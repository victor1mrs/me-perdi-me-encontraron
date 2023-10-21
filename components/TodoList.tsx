import { TodosType } from "@/app/(dashboard)/todos/page"
import Todo from "./Todo"

type TodoListProps = {
  todos: TodosType
}

const TodoList = ({todos}: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />      
      ))}
    </div>
  )
}

export default TodoList;
