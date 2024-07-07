import { getStartPageTypeMany } from "@/app/actions/startPage";
import StartPageNew from "@/components/startpost/StartPageNew";

export default async function StartPageNewWrapper() {
  const startPageType = await getStartPageTypeMany(); // データを取得

  return <StartPageNew startPageType={startPageType} />;
}
