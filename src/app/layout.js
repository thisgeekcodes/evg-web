import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { MenuProvider } from "@/context/MenuContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EVG E-Sports",
  description: "Official website for the EVG E-Sports team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <MenuProvider>
            <Header />
            {children}
          </MenuProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
