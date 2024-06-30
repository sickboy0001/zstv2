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
          <CardDescription>{String(createdAt)}</CardDescription>
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
