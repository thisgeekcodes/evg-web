"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaDiscord, FaTwitter } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header({ menuOpen, setMenuOpen }) {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [evgDropdownOpen, setEvgDropdownOpen] = useState(false);
  const [isMember, setIsMember] = useState(false); // Track if user has "EVG" role

  // Fetch user roles from the API when session is available
  useEffect(() => {
    if (session?.accessToken && session?.user?.id) {
      fetch(`/api/discord/getRoles?userId=${session.user.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("User roles from API:", data.roles);
          console.log(
            "EVG_ROLE_ID from env:",
            process.env.NEXT_PUBLIC_EVG_ROLE_ID
          );
          if (
            data.roles &&
            data.roles.includes(process.env.NEXT_PUBLIC_EVG_ROLE_ID)
          ) {
            console.log("User has the EVG role.");
            setIsMember(true);
          } else {
            console.log("User does NOT have the EVG role.");
            setIsMember(false);
          }
        })
        .catch((error) => console.error("Error fetching roles:", error));
    }
  }, [session]);

  return (
    <header className="bg-gradient-to-b from-black to-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2">
          {/* Social Icons (Left) */}
          <div className="flex items-center space-x-4">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaDiscord className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>

          {/* Logo (Center) */}
          <div className="flex-grow text-center">
            <Link href="/" className="inline-block">
              <img src="/logo.svg" alt="Team Logo" className="h-20" />
            </Link>
          </div>

          {/* Login / Session Info (Right) */}
          <div className="flex flex-col items-end">
            {session ? (
              <>
                <p className="text-sm">Welcome {session.user.name}!</p>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md text-white transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <p className="text-sm"></p>
                <button
                  onClick={() => signIn("discord")}
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-md text-white transition-colors"
                >
                  Login with Discord
                </button>
              </>
            )}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600" />

        {/* Desktop Navigation */}
        <nav className="hidden md:grid grid-cols-3 py-2 items-center">
          {/* Left Column (empty) */}
          <div></div>

          {/* Center Column: Main Navigation Links */}
          <ul className="flex justify-center space-x-8 items-center">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:text-gray-300 transition-colors"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/teams"
                className="hover:text-gray-300 transition-colors"
              >
                Teams
              </Link>
            </li>
            <li className="relative group">
              <button className="hover:text-gray-300 transition-colors focus:outline-none flex items-center space-x-1">
                <span>EVG</span> <TiArrowSortedDown />
              </button>
              <ul className="absolute left-0 hidden group-hover:block bg-black border border-gray-700 mt-2 py-2 w-40">
                <li>
                  <Link
                    href="/evg/about"
                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/evg/partners"
                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/evg/staff"
                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                  >
                    Staff
                  </Link>
                </li>
                <li>
                  <Link
                    href="/evg/achievements"
                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                  >
                    Achievements
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/news"
                className="hover:text-gray-300 transition-colors"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/media"
                className="hover:text-gray-300 transition-colors"
              >
                Media
              </Link>
            </li>
          </ul>

          {/* Right Column: "Members" Link (only if user is a member) */}
          <div className="flex justify-end mt-2">
            {isMember && (
              <Link
                href="/members"
                className="hover:text-yellow-300 transition-colors text-yellow-400"
              >
                Members
              </Link>
            )}
          </div>
        </nav>

        {/* Mobile Navigation Button (Hamburger) */}
        <div className="md:hidden flex items-center justify-between py-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white w-8 h-8 focus:outline-none text-2xl"
          >
            {mobileMenuOpen ? (
              <FaBars className="text-white w-8 h-8" />
            ) : (
              <FaBars className="text-white w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="absolute top-20 left-0 w-full bg-gray-900 shadow-lg z-40">
            {/* Header row for mobile menu: "Home" on left, and close button on right */}
            <div className="flex items-center justify-between px-6 py-2">
              <Link
                href="/"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl"
              >
                <FaTimes className="text-white w-8 h-8" />
              </button>
            </div>
            <ul className="flex flex-col space-y-2 py-4">
              <li>
                <Link
                  href="/shop"
                  className="block px-6 py-2 hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="block px-6 py-2 hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Teams
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setEvgDropdownOpen(!evgDropdownOpen)}
                  className="w-full text-left px-6 py-2 hover:bg-gray-700 transition-colors flex items-center space-x-1"
                >
                  <span>EVG</span> <TiArrowSortedDown />
                </button>
                {evgDropdownOpen && (
                  <ul className="pl-6">
                    <li>
                      <Link
                        href="/evg/about"
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setEvgDropdownOpen(false);
                        }}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/evg/partners"
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setEvgDropdownOpen(false);
                        }}
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/evg/staff"
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setEvgDropdownOpen(false);
                        }}
                      >
                        Staff
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/evg/achievements"
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setEvgDropdownOpen(false);
                        }}
                      >
                        Achievements
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/news"
                  className="block px-6 py-2 hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="block px-6 py-2 hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Media
                </Link>
              </li>
              {isMember && (
                <li>
                  <Link
                    href="/members"
                    className="block px-6 py-2 hover:bg-gray-700 transition-colors text-yellow-400 hover:text-yellow-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Members
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
