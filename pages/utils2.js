import { getServerSideProps } from "pages";

export default function utils2() {
  const tasks = [
    {
      task: "clean_database",
      description: "Clean the database",
    },
  ];

  const Button = ({ task }) => {
    return (
      <button
        className="block"
        onClick={async (e) => {
          e.preventDefault();
          await fetch("/api/utils", {
            body: JSON.stringify({ task: task.task }),
            headers: { "Content-Type": "aplication.json" },
            method: "POST",
          });
        }}
      >
        {task.description}
      </button>
    );
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <Button key={index} task={task} />
      ))}
    </div>
  );
}
