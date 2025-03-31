import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vosco",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={`mx-auto min-h-screen justify-center w-full ${inter.className}`}
        >
          <NavBar />
          <div className="p-8">{children}</div>
        </body>
      </UserProvider>
    </html>
  );
}
