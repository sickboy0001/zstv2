import "./globals.css";
import { Metadata } from "next";
import Header from "@/components/layouts/header/Header";

export const metadata: Metadata = {
  title: "ZeroSecondThining",
  description: "ZeroSecondThining easytool in web ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
