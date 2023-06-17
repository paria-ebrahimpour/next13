import { revalidatePath } from "next/cache";

const todoList: string[] = ["Learn React"];

export default function FormPost() {
  async function addTodo(data: FormData) {
    "use server";
    const todo = data.get("todo") as string;
    todoList.push(todo);
    revalidatePath("/form-post");
  }

  return (
    <main>
      <h1>server actions for forms</h1>
      <h2>Todo List</h2>
      <p>server actions are global. its not session specific</p>
      <p>server actions ar APIs</p>
      <p>
        revalidatePath allows you to revalidate data associated with a specific
        path. This is useful for scenarios where you want to update your cached
        data without waiting for a revalidation period to expire.
      </p>
      <br />
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>{" "}
      <br />
      <form action={addTodo}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
    </main>
  );
}
