import BbsCardList from "@/components/bbsCardList";

import { BBSData } from "./types/types";
import { format, formatDistanceToNow, subDays, subSeconds } from "date-fns";
import { ja } from "date-fns/locale/ja";
import { format as formatTz } from "date-fns-tz";

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
  const date = new Date();
  return (
    <main>
      <p>start</p>
      <p>{format(date, "yyyy年MM月dd日 HH時mm分ss秒(E)", { locale: ja })}</p>
      <p>
        {formatTz(date, "yyyy年MM月dd日 HH時mm分ss秒(E)", {
          timeZone: "Asia/Tokyo",
          locale: ja,
        })}
      </p>
      <p>
        {formatDistanceToNow(subDays(date, 10), {
          addSuffix: true,
          locale: ja,
        })}
      </p>
    </main>
  );
}
