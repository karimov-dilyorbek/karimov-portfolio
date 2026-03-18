import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Karimov Dilyorbek | Frontend Developer",
  description:
    "Frontend developer portfolio built with Next.js and Tailwind CSS. Showcasing responsive websites and modern UI projects.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-slate-950 text-slate-50 antialiased`}>{children}</body>
    </html>
  );
}
