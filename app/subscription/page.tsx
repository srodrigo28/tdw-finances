import Navbar from "@/components/navbar"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const Subscription = () => {
    const {userId} = auth()
    if(!userId) redirect('/login')
    return(
        <div>
            <Navbar />
        </div>
    )
}

export default Subscription