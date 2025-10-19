import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <div className="flex flex-col items-center justify-center gap-5 mx-auto">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <h2>This is a test app I make to learn more about better auth</h2>
      </div>    
      <div>
        <Link href="/sign-in" className="text-blue-500 underline">
          Sign In
        </Link>
      </div>
    </main>
  );
}
