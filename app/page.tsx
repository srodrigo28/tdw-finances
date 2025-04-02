import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-around items-center flex-col md:flex-row gap-10 md:gap-0">
        <h1 className="text-6xl text-violet-700 font-semibold">finances</h1>
        <Link href="/transactions"><button className="text-green-600 tracking-wider font-semibold text-2xl">Dashboard</button></Link>
        <div className="bg-slate-600 h-auto p-2 rounded-md"><UserButton showName /> </div>
    </div>
  );
}
