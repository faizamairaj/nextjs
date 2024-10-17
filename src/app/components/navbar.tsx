import Link from "next/link";

export default function Navbar() {
    return (
       <div className="text-red-500  hover:text-black  text-3xl  font-bold bg-slate-300 p-4 px-60  flex flex-row gap-8">

         <Link href="/about">About</Link> 
         <Link href="/job">Job</Link> 
         <Link href="/programme">Programming</Link> 
         <Link href="/home">Home</Link> 
         <Link href="/service">Service</Link> 
       </div>
    );
}


