'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: {id},
    data: {
      completed: true,
    },
  })

  revalidatePath('/todos')
}

export const newTodo = async (formData: { get: (arg0: string) => any }) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content')
    },
  })

  revalidatePath('/todos')
}
