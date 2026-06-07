import Link from "next/link";
export default function HomePage(){
  return (
    <div className="min-h-[90vh] pt-8 bg-gray-50 text-gray-900">
      
      <div className="max-w-7xl mx-auto border-2 border-gray-100 shadow-sm shadow-gray-300 rounded-lg p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <p className="py-5">Welcome to the home page of our Next.js application! Explore our coding problems platform, study different implementation approaches, and test your logic with dry runs</p>
        <div className="flex justify-center py-5 m-auto">
          <Link 
            href="/problems" 
            className="inline-block justify-center bg-cyan-600 hover:bg-cyan-900 text-white font-bold py-3 px-6 rounded-md transition-colors shadow-sm cursor-pointer"
            >
              View Practice Problems 
          </Link>
      </div>
      </div>
      
    </div>
  )
}