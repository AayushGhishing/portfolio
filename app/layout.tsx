import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aayush Tamang - Data Scientist Portfolio",
  description: "Portfolio of Aayush Tamang, Data Scientist specializing in Machine Learning, Deep Learning, and NLP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}