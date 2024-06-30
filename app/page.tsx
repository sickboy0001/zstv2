import BbsCardList from "@/components/bbsCardList";

import prisma from "@/lib/prismaClient";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  const bbsAllData: BBSData[] = await response.json();
  // console.log(bbsAllData);
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BbsCardList bbsAllData={bbsAllData} />
    </main>
  );
}
