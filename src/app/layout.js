import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/layouts/navbar'
import Footer from '@/app/layouts/footer'



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ikmaluddin | Portofolio",
  description: "Powered by : NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
