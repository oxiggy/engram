import type { MetaFunction } from "@remix-run/node";
import { topics } from "@/data";
import clsx from "clsx";

export const meta: MetaFunction = () => {
  return [
    { title: "EnGram" },
    { name: "description", content: "App for practicing English grammar with interactive exercises." },
  ];
};

export function Topics() {
  return (
    <div className='w-full h-full'>
      <p className="text-indigo-950 text-2xl font-bold text-center py-3">Choose a topic</p>
      <div className="flex flex-wrap justify-center gap-2">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={clsx(
              "text-indigo-900 text-sm leading-none text-center bg-indigo-50 rounded-2xl p-2",
              "hover:bg-indigo-100 cursor-pointer",
            )}
          >
            {topic.title}
          </div>
        ))}
      </div>
    </div>
  );
}
