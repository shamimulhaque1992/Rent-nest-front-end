"use client";

import React from "react";
import {
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
  LineChart,
  Line,
} from "recharts";

interface LandlordStats {
  totalProperties?: number;
  availableProperties?: number;
  unavailableProperties?: number;
  totalRentalRequests?: number;
  pendingRequests?: number;
  approvedRequests?: number;
  completedRequests?: number;
  rejectedRequests?: number;
  totalReviews?: number;
  averageRating?: number;
  totalRevnue?: number;
}

interface LandLordDashboardChartsProps {
  stats: LandlordStats;
}

const COLORS = {
  indigo: "#6366f1",
  emerald: "#10b981",
  rose: "#f43f5e",
  amber: "#f59e0b",
  teal: "#14b8a6",
  red: "#ef4444",
  green: "#22c55e",
  violet: "#8b5cf6",
};

export default function LandLordDashboardCharts({
  stats,
}: LandLordDashboardChartsProps) {
  const propertyBarData = [
    { name: "Total", count: stats.totalProperties ?? 0 },
    { name: "Available", count: stats.availableProperties ?? 0 },
    { name: "Unavailable", count: stats.unavailableProperties ?? 0 },
  ];

  const requestStatusData = [
    { name: "Pending", value: stats.pendingRequests ?? 0, color: COLORS.amber },
    { name: "Approved", value: stats.approvedRequests ?? 0, color: COLORS.green },
    { name: "Completed", value: stats.completedRequests ?? 0, color: COLORS.teal },
    { name: "Rejected", value: stats.rejectedRequests ?? 0, color: COLORS.red },
  ].filter((d) => d.value > 0);

  const revenueData = [
    { name: "Revenue", value: parseFloat((stats.totalRevnue ?? 0).toFixed(2)) },
    { name: "Reviews", value: stats.totalReviews ?? 0 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Property Overview Bar Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
          Property Overview
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Total / Available / Unavailable
        </p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={propertyBarData} barSize={32}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                fontSize: "12px",
                border: "1px solid #e2e8f0",
              }}
            />
            <Bar dataKey="count" radius={[6, 6, 0, 0]}>
              {propertyBarData.map((_, index) => {
                const colors = [COLORS.indigo, COLORS.emerald, COLORS.rose];
                return <Cell key={`cell-${index}`} fill={colors[index]} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Request Status Pie Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
          Request Status
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Breakdown by status
        </p>
        {requestStatusData.length > 0 ? (
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={requestStatusData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
              >
                {requestStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  fontSize: "12px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: "11px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-[220px] flex items-center justify-center text-xs text-muted-foreground">
            No request data yet
          </div>
        )}
      </div>

      {/* Revenue & Reviews Summary */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
          Revenue & Reviews
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Financial & feedback summary
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center justify-between p-4 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/60">
            <div>
              <p className="text-xs text-violet-600 dark:text-violet-400 font-semibold uppercase tracking-wide">
                Total Revenue
              </p>
              <p className="text-2xl font-bold text-violet-700 dark:text-violet-300 mt-0.5">
                ৳{(stats.totalRevnue ?? 0).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60">
            <div>
              <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wide">
                Avg Rating
              </p>
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mt-0.5">
                {(stats.averageRating ?? 0).toFixed(1)} ★
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">
                {stats.totalReviews ?? 0} reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
