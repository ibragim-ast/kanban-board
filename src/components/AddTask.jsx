import { useState } from "react";
import styles from "./AddTask.module.css";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Что нужно сделать?"
      />
      <button className={styles.addBtn} type="submit">
        Добавить
      </button>
    </form>
  );
}

export default AddTask;
