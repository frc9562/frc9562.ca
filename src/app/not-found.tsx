import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="royal-gradient min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl text-red-500 font-medium mb-4 animate-fade-in">OOPS! PAGE NOT FOUND</h3>

        <div className="relative animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-[15rem] md:text-[20rem] font-black text-white opacity-10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl border border-red-900/20 w-full max-w-md">
              <h2 className="text-2xl font-bold text-white mb-4">
                We are sorry, but the page you requested was not found
              </h2>
              <p className="text-gray-300 mb-6">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
              </p>
              <Link href="/">
                <Button className="bg-red-600 hover:bg-red-700">
                  <Home className="mr-2 h-4 w-4" /> Back to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
