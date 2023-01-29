import "../styles/globals.css";
import { Space_Grotesk, Inter } from "@next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body
        className={`${inter.variable} font-sans ${spaceGrotesk.variable} serif-sans bg-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
