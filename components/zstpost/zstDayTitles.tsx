import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import ZstTitle from "./zstTitles";
import { ja } from "date-fns/locale/ja";
import { format as formatTz } from "date-fns-tz";

import { ZstDay } from "@/app/types/zstTypes";

interface propTypes {
  className: string;
  date: Date;
  key: number;
  zstPosts: ZstDay[];
}

const ZstDayTitles = ({ className, zstPosts, ...props }: propTypes) => {
  const { date, key } = props;
  const isSunday = date.getDay() === 0;
  const isSatday = date.getDay() === 6;
  return (
    <>
      <div key={String(key)}>
        <Card className={cn(className)} {...props}>
          <CardHeader>
            <CardTitle
              className={` ${isSunday ? "text-red-500" : ""} ${
                isSatday ? "text-blue-500" : ""
              }`}
            >
              {formatTz(date, "yyyy/MM/dd", {
                timeZone: "Asia/Tokyo",
                locale: ja,
              })}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div>
              <ZstTitle date={date} zstPosts={zstPosts}></ZstTitle>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <Pencil2Icon className="mr-2 h-4 w-4" /> add
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ZstDayTitles;
