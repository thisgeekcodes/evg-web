"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Header from "@/components/Header";

export default function Home() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false); // Track mobile menu state

  return (
    <>
      {/* Pass state to Header */}
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Push content down when menu is open */}
      <main
        className={`min-h-screen bg-gradient-to-b from-black to-gray-500 text-white flex flex-col items-center justify-center px-6 transition-all duration-300 ${
          menuOpen ? "pt-64" : "pt-40"
        }`}
      >
        {/* Welcome Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to EVG Test Site</h1>
          <p className="text-lg text-gray-300 max-w-lg">
            Join the EVG community, compete in eSports, and stay updated with
            the latest news.
          </p>
        </section>

        {/* Sample Content Section */}
        <section className="mt-12 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-3">What is EVG?</h2>
          <p className="text-gray-300">
            EVG is an elite eSports organization dedicated to competitive
            gaming, content creation, and community engagement. Whether you're a
            professional player or a casual fan, there's something for everyone!
          </p>
        </section>

        {/* Call-To-Action */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold">Ready to Join?</h3>
          <button className="mt-4 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md text-white transition-colors">
            Join EVG Today
          </button>
        </section>
      </main>
    </>
  );
}
