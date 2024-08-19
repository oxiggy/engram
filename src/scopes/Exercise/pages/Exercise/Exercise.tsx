import type { MetaFunction } from "@remix-run/node";
import { topics } from "@/data";

export const meta: MetaFunction = () => {
  return [
    { title: "EnGram" },
    { name: "description", content: "App for practicing English grammar with interactive exercises." },
  ];
};

export function Exercise() {
  const title = topics[0].title;
  const tasks = topics[0]?.exercises[0]?.tasks;
  const correctAnswers = tasks?.answers;
  console.log(tasks);
  console.log(correctAnswers);

  return (
    <div className='w-full h-full'>
      <div className='p-3'>
        <button className='rounded-md border-2 border-slate-200 leading-none p-2'>Back</button>
      </div>
      <p className="text-indigo-950 text-2xl font-bold text-center py-3">{title}</p>
      {tasks.map((task, index) => (
        <div key={index}>
          <p>{task.question}</p>
        </div>
      ))}
    </div>
  );
}
