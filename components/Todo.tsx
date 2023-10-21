'use client'

import { TodoType } from "@/app/(dashboard)/todos/page"
import { useTransition } from "react"
import { completeTodo } from "@/utils/actions"

type TodoProps = {
  todo: TodoType
}

const Todo = ( {todo}: TodoProps ) => {
  const [isPending, startTransition] = useTransition()
  return (
    <p
      className={`px-8 py-2 border border-black/25 cursor-pointer ${
        todo.completed ? 'line-through text-black/30' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </p>
  )
}

export default Todo
