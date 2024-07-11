"use client";
import { ZstContent, ZstDay } from "@/app/types/zstTypes";
import { Pencil1Icon } from "@radix-ui/react-icons";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface propTypes {
  zstContent: ZstContent;
  key: Number;
}

const ZstTitle = (props: propTypes) => {
  const { zstContent, key } = props;
  // console.log(zstContent);
  return (
    <div key={String(key)} className="py-1">
      <div className="">
        <Accordion
          type="single"
          collapsible
          defaultValue={`item-key-${String(key)}}`}
        >
          <AccordionItem value={`item-key-${String(key)}}1`}>
            <AccordionTrigger className="py-2">
              <p className="font-medium leading-none">{zstContent.title}</p>
            </AccordionTrigger>
            <AccordionContent>
              {zstContent.content.map((item, mapkey) => (
                <p key={mapkey} className="text-sm ">
                  {item}
                </p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* <div>
        <div className="flex pb-1 ">
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <p className="font-medium leading-none">{zstContent.title}</p>
          <div>
            <Pencil1Icon className="mr-2 h-4 w-4" />
          </div>
        </div>
        <div>
          {zstContent.content.map((item, mapkey) => (
            <p key={mapkey} className="text-sm ">
              {item}
            </p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ZstTitle;
