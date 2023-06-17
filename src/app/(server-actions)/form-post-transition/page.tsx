import { revalidatePath } from "next/cache";
import AddButton from "./AddButton";

const todoList: string[] = ["Learn React"];

export default function FormPostWithTransition() {
  async function addTodo(data: string) {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 3000));

    todoList.push(data);
    revalidatePath("/form-post-transition");
  }

  return (
    <main>
      <h1>server actions for forms - useTransition</h1>
      <h2>Todo List with loading status</h2>
      <br />
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <br />

      <AddButton addTodo={addTodo} />
    </main>
  );
}
