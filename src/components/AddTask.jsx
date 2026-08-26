import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddTask;
