import {
  getStartPagePost,
  getStartPageTypeMany,
} from "@/app/actions/startPage";
import StartPageEdit from "@/components/startpost/StartPageEdit";

export default async function StartPostEdit({
  params,
}: {
  params: { id: string };
}) {
  const startPageTypeMany = await getStartPageTypeMany();
  const startPagePost = await getStartPagePost(parseInt(params.id));

  // console.log(startPagePost);
  // console.log(startPageType);

  return (
    <StartPageEdit
      startPagePost={startPagePost}
      startPageTypeMany={startPageTypeMany}
    />
  );
}
