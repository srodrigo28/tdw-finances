export default function Transaction( { params: { id }} ){
    <div className="flex justify-center items-center h-screen">
            <h1 className="text-3xl">
                Transaction id: 
                <span className="text-4xl text-green-700 font-mono font-medium">{id}</span>
            </h1>
    </div>
}