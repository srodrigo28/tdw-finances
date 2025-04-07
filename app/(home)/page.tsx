import Navbar from "@/components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import { TransactionsPieChart } from "./_components/transactions-pie-chart";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";

interface HomeProps{
  searchParams: {  month: string; }
}

const Home = async({searchParams: {month}} : HomeProps) => {
  const {userId} = auth()
  if(!userId) redirect('/login')
    const monthIsInvalid = !month || !isMatch(month, "MM")
  if(monthIsInvalid){
    redirect('?month=01') // caso seja invalido colocar um 404
  }
  const dashboard = await getDashboard(month)
  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6 ">
        <div className="flex justify-between">
          <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold md:text-4xl">Dashboard</h1>
          <TimeSelect />
          </div>
        </div>
          <div className="md:grid md:grid-cols-[2fr,1fr] gap-6">
            <div className="flex flex-col gap-6">
              <SummaryCards month={month} {...dashboard}  />  
              <div className="md:grid md:grid-cols-3 md:grid-rows-1 gap-6">
                <TransactionsPieChart {...dashboard} />
                <ExpensesPerCategory expensesPerCategory={dashboard.totalExpensePerCategory} />
              </div>
            </div>
            <LastTransactions lastTransactions={dashboard.lastTransactions} />
          </div>
        </div>
    </>
  );
}

export default Home;
