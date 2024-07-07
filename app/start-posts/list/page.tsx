import PostList from "@/components/startpost/postList";
import StartPagePreview from "@/components/startpost/startpostpreview";
import React from "react";

const StartPageEdit = () => {
  return (
    <main>
      <PostList></PostList>

      <StartPagePreview></StartPagePreview>
    </main>
  );
};

export default StartPageEdit;
