import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/css/output.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Games shop",
  description: "Gaming shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
