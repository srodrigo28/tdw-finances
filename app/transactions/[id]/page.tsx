import { NextPage } from "next";

interface TransactionProps {
  params: { id: string };
}

const Transaction: NextPage<TransactionProps> = ({ params }) => {
  const { id } = params;

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl">
        Transaction ID:{" "}
        <span className="text-4xl text-green-700 font-mono font-medium">
          {id}
        </span>
      </h1>
    </div>
  );
};

export default Transaction;