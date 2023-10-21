import TodoList from '@/components/TodoList';
import db from '@/utils/db'

export type TodoType = {
  id: string;
  createdAt: Date;
  content: string;
  completed: boolean;
}

export type TodosType = TodoType[]

const getData = async () => {
  const todos: TodosType = await db.todo.findMany({})
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <p>Todos Page</p>
      <TodoList todos={todos}/>
    </div>
  )
}

export default TodosPage
