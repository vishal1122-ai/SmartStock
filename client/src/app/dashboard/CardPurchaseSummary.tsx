import { useGetDashboardMetricsQuery } from "@/state/api";
import { TrendingDown, TrendingUp } from "lucide-react";
import numeral from "numeral";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardPurchaseSummary = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary || [];

  const lastDataPoint = purchaseData[purchaseData.length - 1] || null;

  return (
    <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-lg rounded-xl p-5">
      {isLoading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div className="mb-4">
            <h2 className="text-lg font-bold text-teal-600">
              Purchase Summary
            </h2>
            <hr className="border-gray-300 mt-2" />
          </div>

          {/* BODY */}
          <div>
            {/* BODY HEADER */}
            <div className="mb-6 mt-4 px-3">
              <p className="text-sm text-gray-500">Purchased</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-gray-800">
                  {lastDataPoint
                    ? numeral(lastDataPoint.totalPurchased).format("$0.00a")
                    : "$0"}
                </p>
                {lastDataPoint && (
                  <p
                    className={`text-sm flex ml-3 ${
                      lastDataPoint.changePercentage! >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {lastDataPoint.changePercentage! >= 0 ? (
                      <TrendingUp className="w-5 h-5 mr-1" />
                    ) : (
                      <TrendingDown className="w-5 h-5 mr-1" />
                    )}
                    {Math.abs(lastDataPoint.changePercentage!)}%
                  </p>
                )}
              </div>
            </div>

            {/* CHART */}
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                data={purchaseData}
                margin={{ top: 10, right: 20, left: -30, bottom: 20 }}
              >
                <XAxis
                  dataKey="date"
                  tick={false}
                  axisLine={false}
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis tickLine={false} tick={false} axisLine={false} />
                <Tooltip
                  formatter={(value: number) => [
                    `$${value.toLocaleString("en")}`,
                  ]}
                  labelFormatter={(label) => {
                    const date = new Date(label);
                    return date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                  itemStyle={{ color: "#555" }}
                />
                <Area
                  type="linear"
                  dataKey="totalPurchased"
                  stroke="#14b8a6"
                  fill="rgba(20, 184, 166, 0.3)"
                  dot
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default CardPurchaseSummary;
