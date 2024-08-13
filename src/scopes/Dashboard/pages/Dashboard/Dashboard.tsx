import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "EnGram" },
    { name: "description", content: "App for practicing English grammar with interactive exercises." },
  ];
};

export function Dashboard() {
  return (
    <div>home</div>
  );
}
