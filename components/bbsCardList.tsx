import React from "react";
import BbsCard from "./bbsCard";
import { BBSData } from "@/app/types/types";

interface BBSAllDataProps {
  bbsAllData: BBSData[];
}
const cardList = ({ bbsAllData }: BBSAllDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData: BBSData) => (
        <BbsCard key={bbsData.id} bbsData={bbsData}></BbsCard>
      ))}
    </div>
  );
};

export default cardList;
