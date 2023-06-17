"use client";
import { useRef, useTransition } from "react";

export default function AddButton({
  addTodo,
}: {
  addTodo: (todo: string) => Promise<void>;
}) {
  let [pending, startTransition] = useTransition();
  const todoRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input ref={todoRef} type="text" name="todo" />
      <button
        disabled={pending}
        onClick={async () => {
          startTransition(async () => {
            await addTodo(todoRef.current!.value);
          });
        }}
      >
        Add Todo
      </button>
    </>
  );
}
