import { useGetDashboardMetricsQuery } from "@/state/api";
import { TrendingUp } from "lucide-react";
import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardSalesSummary = () => {
  const { data, isLoading, isError } = useGetDashboardMetricsQuery();
  const salesData = data?.salesSummary || [];

  const [timeframe, setTimeframe] = useState("weekly");

  const totalValueSum =
    salesData.reduce((acc, curr) => acc + curr.totalValue, 0) || 0;

  const averageChangePercentage =
    salesData.reduce((acc, curr, _, array) => {
      return acc + curr.changePercentage! / array.length;
    }, 0) || 0;

  const highestValueData = salesData.reduce((acc, curr) => {
    return acc.totalValue > curr.totalValue ? acc : curr;
  }, salesData[0] || {});

  const highestValueDate = highestValueData.date
    ? new Date(highestValueData.date).toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit",
      })
    : "N/A";

  if (isError) {
    return (
      <div className="text-center text-red-500 p-5">Failed to fetch data</div>
    );
  }

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-lg rounded-xl flex flex-col justify-between p-5">
      {isLoading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div className="mb-4">
            <h2 className="text-lg font-bold text-teal-600">Sales Summary</h2>
            <hr className="border-gray-300 mt-2" />
          </div>

          {/* BODY */}
          <div>
            {/* BODY HEADER */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-500">Value</p>
                <div className="flex items-center">
                  <span className="text-2xl font-extrabold text-gray-800">
                    $
                    {(totalValueSum / 1000000).toLocaleString("en", {
                      maximumFractionDigits: 2,
                    })}
                    m
                  </span>
                  <span
                    className={`text-sm flex ml-2 ${
                      averageChangePercentage >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {averageChangePercentage.toFixed(2)}%
                  </span>
                </div>
              </div>
              <select
                className="shadow-sm border border-gray-300 bg-white p-2 rounded focus:outline-none focus:border-teal-500"
                value={timeframe}
                onChange={(e) => {
                  setTimeframe(e.target.value);
                }}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            {/* CHART */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesData}
                margin={{ top: 20, right: 20, left: -20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return `${date.getMonth() + 1}/${date.getDate()}`;
                  }}
                  tick={{ fontSize: 12, fill: "#555" }}
                />
                <YAxis
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}m`}
                  tick={{ fontSize: 12, fill: "#555" }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  formatter={(value: number) => [
                    `$${value.toLocaleString("en")}`,
                  ]}
                  labelFormatter={(label) => {
                    const date = new Date(label);
                    return date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                  }}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                  itemStyle={{ color: "#555" }}
                />
                <Bar
                  dataKey="totalValue"
                  fill="#14b8a6"
                  barSize={12}
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* FOOTER */}
          <div>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <p>{salesData.length || 0} days</p>
              <p>
                Highest Sales Date:{" "}
                <span className="font-bold text-gray-800">
                  {highestValueDate}
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardSalesSummary;
