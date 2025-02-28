import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gradient-to-tr from-purple-950/10 to-purple-950/30 text-white py-4 mt-8">
        <div className="container mx-auto flex sm:flex-row flex-col gap-4 justify-between items-center">
          {/* Copyright Section */}
          <p className="sm:text-sm text-xs">
            Copyright&copy; 2024 XYZ
          </p>
  
          {/* Links Section */}
          <div className="flex space-x-6">
            <Link href="/" className="sm:text-sm text-xs hover:text-indigo-500 transition duration-300">
              Help Center
            </Link>
            <Link href="/" className="sm:text-sm text-xs hover:text-indigo-500 transition duration-300">
              Terms of Condition
            </Link>
            <Link href="/" className="sm:text-sm text-xs hover:text-indigo-500 transition duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    );
  }
  