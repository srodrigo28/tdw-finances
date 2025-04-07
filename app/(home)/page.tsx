import Navbar from "@/components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";

export default function Home() {
  const {userId} = auth()
  if(!userId) redirect('/login')
  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <div className="flex justify-between p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <SummaryCards />
      </div>
    </>
  );
}
