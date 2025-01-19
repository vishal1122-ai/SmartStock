"use client";

import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-4">
      {/* Popular Products */}
      <div className="row-span-3 xl:row-span-6">
        <CardPopularProducts />
      </div>

      {/* Sales Summary */}
      <div className="row-span-3 xl:row-span-6">
        <CardSalesSummary />
      </div>

      {/* Purchase Summary */}
      <div className="row-span-2 xl:row-span-4">
        <CardPurchaseSummary />
      </div>

      {/* Expense Summary */}
      <div className="row-span-2 xl:row-span-4">
        <CardExpenseSummary />
      </div>

      {/* Stat Cards */}
      <div className="row-span-1 xl:row-span-2">
        <StatCard
          title="Customer & Expenses"
          primaryIcon={<Package className="text-teal-600 w-6 h-6" />}
          dateRange="22 - 29 October 2023"
          details={[
            {
              title: "Customer Growth",
              amount: "175.00",
              changePercentage: 131,
              IconComponent: TrendingUp,
            },
            {
              title: "Expenses",
              amount: "10.00",
              changePercentage: -56,
              IconComponent: TrendingDown,
            },
          ]}
        />
      </div>
      <div className="row-span-1 xl:row-span-2">
        <StatCard
          title="Dues & Pending Orders"
          primaryIcon={<CheckCircle className="text-teal-600 w-6 h-6" />}
          dateRange="22 - 29 October 2023"
          details={[
            {
              title: "Dues",
              amount: "250.00",
              changePercentage: 131,
              IconComponent: TrendingUp,
            },
            {
              title: "Pending Orders",
              amount: "147",
              changePercentage: -56,
              IconComponent: TrendingDown,
            },
          ]}
        />
      </div>
      <div className="row-span-1 xl:row-span-2">
        <StatCard
          title="Sales & Discount"
          primaryIcon={<Tag className="text-teal-600 w-6 h-6" />}
          dateRange="22 - 29 October 2023"
          details={[
            {
              title: "Sales",
              amount: "1000.00",
              changePercentage: 20,
              IconComponent: TrendingUp,
            },
            {
              title: "Discount",
              amount: "200.00",
              changePercentage: -10,
              IconComponent: TrendingDown,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
