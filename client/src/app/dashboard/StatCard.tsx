import { LucideIcon } from "lucide-react";
import React from "react";

type StatDetail = {
  title: string;
  amount: string;
  changePercentage: number;
  IconComponent: LucideIcon;
};

type StatCardProps = {
  title: string;
  primaryIcon: JSX.Element;
  details: StatDetail[];
  dateRange: string;
};

const StatCard = ({
  title,
  primaryIcon,
  details,
  dateRange,
}: StatCardProps) => {
  const formatPercentage = (value: number) => {
    const signal = value >= 0 ? "+" : "";
    return `${signal}${value.toFixed()}%`;
  };

  const getChangeColor = (value: number) =>
    value >= 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white dark:bg-gray-700 shadow-lg rounded-xl flex flex-col justify-between p-5 w-full">
      {/* HEADER */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-lg text-teal-600">{title}</h2>
          <span className="text-sm text-gray-500">{dateRange}</span>
        </div>
        <hr className="border-gray-300" />
      </div>

      {/* BODY */}
      <div className="flex items-center justify-around gap-4 mt-4">
        <div className="rounded-full p-5 bg-teal-50 border-teal-300 border">
          {primaryIcon}
        </div>
        <div className="flex-1">
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-500">{detail.title}</span>
                <span className="font-semibold text-gray-800">
                  {detail.amount}
                </span>
                <div className="flex items-center">
                  <detail.IconComponent
                    className={`w-4 h-4 mr-1 ${getChangeColor(
                      detail.changePercentage
                    )}`}
                  />
                  <span
                    className={`font-medium ${getChangeColor(
                      detail.changePercentage
                    )}`}
                  >
                    {formatPercentage(detail.changePercentage)}
                  </span>
                </div>
              </div>
              {index < details.length - 1 && <hr className="border-gray-300" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
