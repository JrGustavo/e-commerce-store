import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ModalProvider from "@/providers/modal-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ToastProvider from "@/providers/toast-provider";


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
        <ModalProvider/>
        <ToastProvider/>

        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    )
}