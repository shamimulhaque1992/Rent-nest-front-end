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
} from "recharts";

interface TenantStats {
  totalRequests?: number;
  pendingRequests?: number;
  approvedRequests?: number;
  activeRequests?: number;
  completedRequests?: number;
  rejectedRequests?: number;
  cancelledRequests?: number;
  totalPayments?: number;
  totalAmountSpent?: number;
  totalReviews?: number;
}

interface TenantDashboardChartsProps {
  stats: TenantStats;
}

const COLORS = {
  indigo: "#6366f1",
  amber: "#f59e0b",
  emerald: "#10b981",
  blue: "#3b82f6",
  teal: "#14b8a6",
  rose: "#f43f5e",
  red: "#ef4444",
  violet: "#8b5cf6",
  green: "#22c55e",
};

export default function TenantDashboardCharts({
  stats,
}: TenantDashboardChartsProps) {
  const requestStatusData = [
    { name: "Pending", value: stats.pendingRequests ?? 0, color: COLORS.amber },
    { name: "Approved", value: stats.approvedRequests ?? 0, color: COLORS.emerald },
    { name: "Active", value: stats.activeRequests ?? 0, color: COLORS.blue },
    { name: "Completed", value: stats.completedRequests ?? 0, color: COLORS.teal },
    { name: "Rejected", value: stats.rejectedRequests ?? 0, color: COLORS.rose },
    { name: "Cancelled", value: stats.cancelledRequests ?? 0, color: COLORS.red },
  ].filter((d) => d.value > 0);

  const requestBarData = [
    { name: "Pending", count: stats.pendingRequests ?? 0 },
    { name: "Approved", count: stats.approvedRequests ?? 0 },
    { name: "Active", count: stats.activeRequests ?? 0 },
    { name: "Completed", count: stats.completedRequests ?? 0 },
    { name: "Rejected", count: stats.rejectedRequests ?? 0 },
    { name: "Cancelled", count: stats.cancelledRequests ?? 0 },
  ];

  const barColors = [
    COLORS.amber,
    COLORS.emerald,
    COLORS.blue,
    COLORS.teal,
    COLORS.rose,
    COLORS.red,
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Request Status Pie Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
          Request Status
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Overview by status
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
            No requests yet
          </div>
        )}
      </div>

      {/* Request Count Bar Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
          Requests Breakdown
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Count per status
        </p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={requestBarData} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 9 }}
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
              {requestBarData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={barColors[index % barColors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Financial Summary */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
          Financial Summary
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Payments & spending
        </p>
        <div className="flex flex-col gap-4 mt-2">
          <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60">
            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wide">
              Total Spent
            </p>
            <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mt-0.5">
              ৳{(stats.totalAmountSpent ?? 0).toFixed(2)}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/60">
            <p className="text-xs text-violet-600 dark:text-violet-400 font-semibold uppercase tracking-wide">
              Payments Made
            </p>
            <p className="text-2xl font-bold text-violet-700 dark:text-violet-300 mt-0.5">
              {stats.totalPayments ?? 0}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60">
            <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wide">
              Reviews Given
            </p>
            <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mt-0.5">
              {stats.totalReviews ?? 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
