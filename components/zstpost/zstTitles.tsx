"use client";
import { ZstDay } from "@/app/types/zstTypes";
import { Pencil1Icon } from "@radix-ui/react-icons";
import React from "react";
import ZstTitle from "./zstTitle";

interface propTypes {
  date: Date;
  zstPosts: ZstDay[];
}

const ZstTitles = (props: propTypes) => {
  const { date, zstPosts } = props;
  return (
    <>
      {zstPosts.filter((f) => f.date.toDateString() == date.toDateString())
        .length > 0 && (
        <div>
          {zstPosts
            .filter((f) => f.date.toDateString() == date.toDateString())[0]
            .zstContent.map((zstContent, key) => (
              <>
                <ZstTitle zstContent={zstContent} key={key}></ZstTitle>
                {/* <div key={key} className="flex pb-2 ">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <p className="text-sm font-medium leading-none">
                    {content.title}
                  </p>
                  <div>
                    <Pencil1Icon className="mr-2 h-4 w-4" />
                  </div>
                </div>
                <div></div> */}
              </>
            ))}
        </div>
      )}
    </>
  );
};

export default ZstTitles;
