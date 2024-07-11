"use client";
import React from "react";
import { ZstDay } from "@/app/types/zstTypes";
import ZstDayTitles from "./zstDayTitles";
import { cn } from "@/lib/utils";

interface propTypes {
  rows: number;
  cols: number;
  basedate: Date;
  className: string;
  dates: Date[];
  zstPosts: ZstDay[];
}

const ZstViewGrid = ({ className, ...props }: propTypes) => {
  const { rows, cols, dates, zstPosts } = props;
  const grdicolsnumber = `grid-cols-${String(cols)}`;
  // console.log(`grid grid-cols-${String(cols)} gap-4`);
  // const divclassNameValue = cn("grid", "gap-4", { grdicolsnumber });
  //`grid-cols-1  grid-cols-2  grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 grid-cols-8`;
  const divclassNameValue = `grid grid-cols-${String(cols)} gap-4`;
  return (
    <>
      <div className={divclassNameValue}>
        {/* <div className={`grid grid-cols-${String(cols)} gap-4`}> */}
        {dates.map((date, key) => (
          <ZstDayTitles
            className={className}
            date={date}
            key={key}
            zstPosts={zstPosts}
          ></ZstDayTitles>
        ))}
      </div>
    </>
  );
};

export default ZstViewGrid;
