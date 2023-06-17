import { revalidatePath } from "next/cache";
import AddButton from "./AddButton";

const todoList: string[] = ["Learn React"];

export default function Home() {
  async function addTodo(data: FormData) {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const todo = data.get("todo") as string;
    todoList.push(todo);
    revalidatePath("/");
  }

  return (
    <main>
      <h1>server actions for forms - useFormStatus</h1>
      <h2>Todo List with loading status</h2>
      <p>
        for adding status we should use &ldquo;use client&ldquo; in button
        component (ruseFormStatusun js in client). use &ldquo;useFormStatus&ldquo; hook in
        button component for disable it when it is pending.
      </p>
      <br />
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <br />
      <form action={addTodo}>
        <input type="text" name="todo" />
        <AddButton />
      </form>
    </main>
  );
}
