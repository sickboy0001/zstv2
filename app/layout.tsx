import "./globals.css";
import SupabaseListener from "@/components/supabaseListener";
import { Metadata } from "next";
import Header from "@/components/layouts/haader/Header";

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
        <div>
          <SupabaseListener />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
