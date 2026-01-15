"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { AnalyticsData } from "@/types";

interface AnalyticsDashboardProps {
  data: AnalyticsData[];
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088fe"];

export function AnalyticsDashboard({ data }: AnalyticsDashboardProps) {
  const [selectedRange, setSelectedRange] = useState<"7d" | "30d" | "90d">(
    "30d",
  );

  const filteredData = data.slice(-getRangeDays(selectedRange));

  function getRangeDays(range: string): number {
    switch (range) {
      case "7d":
        return 7;
      case "30d":
        return 30;
      case "90d":
        return 90;
      default:
        return 30;
    }
  }

  const pieData = [
    { name: "Direct", value: 400 },
    { name: "Social", value: 300 },
    { name: "Referral", value: 300 },
    { name: "Organic", value: 200 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Analytics Overview
        </h2>
        <div className="flex gap-2">
          {(["7d", "30d", "90d"] as const).map((range) => (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedRange === range
                  ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Visitors & Page Views
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                className="dark:stroke-gray-700"
              />
              <XAxis
                dataKey="date"
                stroke="#6b7280"
                className="dark:stroke-gray-400"
              />
              <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgb(255 255 255)",
                  border: "1px solid rgb(229 231 235)",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "rgb(17 24 39)" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#8884d8"
                strokeWidth={2}
                name="Visitors"
              />
              <Line
                type="monotone"
                dataKey="pageViews"
                stroke="#82ca9d"
                strokeWidth={2}
                name="Page Views"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Daily Traffic
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                className="dark:stroke-gray-700"
              />
              <XAxis
                dataKey="date"
                stroke="#6b7280"
                className="dark:stroke-gray-400"
              />
              <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgb(255 255 255)",
                  border: "1px solid rgb(229 231 235)",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "rgb(17 24 39)" }}
              />
              <Legend />
              <Bar dataKey="visitors" fill="#8884d8" name="Visitors" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Bounce Rate
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                className="dark:stroke-gray-700"
              />
              <XAxis
                dataKey="date"
                stroke="#6b7280"
                className="dark:stroke-gray-400"
              />
              <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgb(255 255 255)",
                  border: "1px solid rgb(229 231 235)",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "rgb(17 24 39)" }}
              />
              <Legend />
              <Bar dataKey="bounceRate" fill="#ffc658" name="Bounce Rate" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Traffic Sources
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgb(255 255 255)",
                  border: "1px solid rgb(229 231 235)",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "rgb(17 24 39)" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
