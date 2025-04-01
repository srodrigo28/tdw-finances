import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex items-center justify-around h-screen">
      <h1 className="text-6xl text-violet-700 font-semibold">Hello finances</h1>
      <div className="bg-slate-400 rounded-lg p-2 text-xl">
      <UserButton showName />
      </div>
    </div>
  );
}
