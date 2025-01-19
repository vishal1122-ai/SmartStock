import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";

const inter = Inter({ subsets: ["latin"], display: "swap" }); // Use "swap" for better font loading

export const metadata: Metadata = {
  title: "StockSmart - Inventory Management App",
  description: "Efficiently manage your inventory with StockSmart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
