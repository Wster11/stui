import React, { useEffect } from "react";
import "./index.scss";
import "./index.css";
export interface TaskAttrs {
  id: string;
  title: string;
  state: "TASK_ARCHIVED" | "TASK_INBOX" | "TASK_PINNED";
  updatedAt?: Date;
  theme?: "light" | "dark";
}

interface TaskProps {
  task: TaskAttrs;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

export default function Task({
  task: { id, title, state, theme = "light" },
  onArchiveTask,
  onPinTask
}: TaskProps) {
  useEffect(() => {
    try {
      let html = document.querySelector("html")!;
      html.classList.remove("light");
      html.classList.remove("dark");
      if (theme === "light") {
        html.classList.add("light");
      } else {
        html.classList.add("dark");
      }
    } catch (error) {}
  }, [theme]);

  return (
    <div data-theme="light-theme" className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}
