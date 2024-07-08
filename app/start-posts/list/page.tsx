import { getStartPagePostManyStartPage } from "@/app/actions/startPage";
import PostList from "@/components/startpost/postList";
import { StartPost } from "@/components/startpost/postListColumn";
import StartPagePreview from "@/components/startpost/startpostpreview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { start_post } from "@prisma/client";
import React from "react";

async function getData(): Promise<start_post[]> {
  const response = await getStartPagePostManyStartPage();
  return response;
}

const StartPageEdit = async () => {
  const data = await getData();
  return (
    <main>
      <Tabs defaultValue="list" className="container mx-auto py-10">
        <TabsList>
          <TabsTrigger value="list">list</TabsTrigger>
          <TabsTrigger value="view">view</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <PostList></PostList>
        </TabsContent>
        <TabsContent value="view">
          <StartPagePreview></StartPagePreview>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default StartPageEdit;
