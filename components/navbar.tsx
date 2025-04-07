"use client"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    return ( 
        <nav className="flex justify-between px-8 py-4 border-b border-solid">
            {/* ESQUERDA */}
            <Image src="/logo.svg" width={173} height={39} alt="Finance AI Logo" />

            {/* CENTRO */}
            <div className="flex items-center gap-10">
                <Link className={ pathname == "/" ? "text-primary font-bold" : "text-muted-foreground" } href="/">Dashboard</Link>
                <Link className={  pathname == "/transactions" ? "text-primary font-bold" : "text-muted-foreground" } href="/transactions">Transações</Link>
                <Link className={pathname == "/subscription" ? "text-primary font-bold" : "text-muted-foreground" } href="/subscription">Assinatura</Link>
            </div>
            
            {/* DIREITA */}
            <UserButton showName />

        </nav>
     );
}
 
export default Navbar;