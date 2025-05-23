"use client"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    return ( 
        <nav className="flex justify-between px-8 py-4 border-b border-solid sticky top-0 z-10 bg-slate-900">
            {/* ESQUERDA */}
            <Image src="/logo.svg" width={173} height={39} alt="Finance AI Logo" />

            {/* CENTRO */}
            <div className="md:flex items-center gap-10 hidden">
                <Link className={pathname == "/" ? "text-primary font-bold" : "text-muted-foreground" } href="/">Dashboard</Link>
                <Link className={pathname == "/transactions" ? "text-primary font-bold" : "text-muted-foreground" } href="/transactions">Transações</Link>
                <Link className={pathname == "/subscription" ? "text-primary font-bold" : "text-muted-foreground" } href="/subscription">Assinaturas</Link>
                <Link className={pathname == "/aportes" ? "text-primary font-bold" : "text-muted-foreground" } href="/aportes">Investir +</Link>
            </div>
            
            {/* DIREITA */}
            <div className="bg-primary flex items-center justify-center p-2 rounded-full">
            <UserButton showName />
            </div>
        </nav>
     );
}
export default Navbar;