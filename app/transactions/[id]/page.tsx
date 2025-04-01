interface IdProps{
    id: string
}
const Transaction = ({ params: { id }} ) => {
    // http://localhost:3000/transactions/100
    return(
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-3xl">
                Transaction id: 
                <span className="text-4xl text-green-700 font-mono font-medium"> {id} </span>
            </h1>
        </div>
    )
}
export default Transaction