// src/app/page.js

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link"; // Next.js uchun Link komponenti

export default function HomePage() {
  return (
    <div>
      <Header />

      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to the Quiz Platform
        </h1>
        <p className="text-xl text-center mb-6">
          Test your knowledge with our interactive quizzes!
        </p>

        <Link href="/quiz">
          <a className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-600 transition duration-300">
            Start Quiz
          </a>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
