import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BBSData } from "@/app/types/types";

import { ja } from "date-fns/locale/ja";
import { format as formatTz } from "date-fns-tz";

interface BBSDataProps {
  bbsData: BBSData;
}
const bbsCard = ({ bbsData }: BBSDataProps) => {
  const { title, content, createdAt, username, id } = bbsData;

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{username}</CardDescription>
          <CardDescription>
            <p>
              {formatTz(createdAt, "yyyy年MM月dd日(E) HH時mm分ss秒", {
                timeZone: "Asia/Tokyo",
                locale: ja,
              })}
            </p>
          </CardDescription>
        </CardHeader>

        <CardContent>{content}</CardContent>
        <CardFooter>
          <Link href={`/bbs-posts/${id}`} className="text-blue-500">
            read mode
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default bbsCard;
