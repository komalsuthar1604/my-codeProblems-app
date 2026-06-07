import Link from "next/link";
interface ProblemLayoutProps {
  children: React.ReactNode; 
}
export default function ProblemLayoutPage({children} :ProblemLayoutProps){
    return (
        <div className="bg-white px-3 py-3 m-auto ">
            <nav>
                <Link href="/problems" className="text-blue-500">
                    &larr; Back to all Problems
                </Link>
            </nav>
            <main>{children}</main>
        </div>
    )

}