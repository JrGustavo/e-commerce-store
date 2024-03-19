import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petal flores Tienda ",
  description: "E-commerce de Petal flores",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    )
}