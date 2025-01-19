import { useGetDashboardMetricsQuery } from "@/state/api";
import { ShoppingBag } from "lucide-react";
import React from "react";
import Rating from "../(components)/Rating";
import Image from "next/image";

const CardPopularProducts = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="bg-white shadow-lg rounded-xl p-5">
      {isLoading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <h3 className="text-lg font-bold text-teal-600 mb-3">
            Popular Products
          </h3>
          <hr className="border-gray-300 mb-4" />

          {/* BODY */}
          <div className="flex flex-col gap-4">
            {dashboardMetrics?.popularProducts.map((product) => (
              <div
                key={product.productId}
                className="flex items-center justify-between gap-4 px-5 py-4 bg-gray-50 rounded-lg shadow-sm"
              >
                {/* PRODUCT DETAILS */}
                <div className="flex items-center gap-3">
                  <Image
                    src={`https://inventorymanagements3w00376898.s3.us-east-1.amazonaws.com/product${
                      Math.floor(Math.random() * 3) + 1
                    }.png`}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="rounded-md object-cover w-14 h-14"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-gray-800">
                      {product.name}
                    </div>
                    <div className="flex text-sm items-center text-gray-600">
                      <span className="font-semibold text-teal-600">
                        ${product.price}
                      </span>
                      <span className="mx-2">|</span>
                      <Rating rating={product.rating || 0} />
                    </div>
                  </div>
                </div>

                {/* SALES DETAILS */}
                <div className="flex items-center text-xs text-gray-700">
                  <button className="p-2 rounded-full bg-teal-100 text-teal-600 hover:bg-teal-200 transition">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  <span className="ml-2 font-medium">
                    {Math.round(product.stockQuantity / 1000)}k Sold
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProducts;
