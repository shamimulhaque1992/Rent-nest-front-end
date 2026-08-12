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

interface AdminStats {
  totalUsers?: number;
  totalTenants?: number;
  totalLandlords?: number;
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
  totalCategories?: number;
}

interface AdminDashboardChartsProps {
  stats: AdminStats;
}

const COLORS = {
  indigo: "#6366f1",
  blue: "#3b82f6",
  violet: "#8b5cf6",
  emerald: "#10b981",
  rose: "#f43f5e",
  amber: "#f59e0b",
  teal: "#14b8a6",
  red: "#ef4444",
  green: "#22c55e",
  slate: "#64748b",
};

export default function AdminDashboardCharts({
  stats,
}: AdminDashboardChartsProps) {
  const userDistData = [
    { name: "Tenants", value: stats.totalTenants ?? 0, color: COLORS.blue },
    {
      name: "Landlords",
      value: stats.totalLandlords ?? 0,
      color: COLORS.violet,
    },
    {
      name: "Others",
      value: Math.max(
        0,
        (stats.totalUsers ?? 0) -
          (stats.totalTenants ?? 0) -
          (stats.totalLandlords ?? 0),
      ),
      color: COLORS.slate,
    },
  ].filter((d) => d.value > 0);

  const propertyData = [
    {
      name: "Properties",
      Available: stats.availableProperties ?? 0,
      Unavailable: stats.unavailableProperties ?? 0,
    },
  ];

  const requestStatusData = [
    {
      name: "Pending",
      value: stats.pendingRequests ?? 0,
      color: COLORS.amber,
    },
    {
      name: "Approved",
      value: stats.approvedRequests ?? 0,
      color: COLORS.green,
    },
    {
      name: "Completed",
      value: stats.completedRequests ?? 0,
      color: COLORS.teal,
    },
    {
      name: "Rejected",
      value: stats.rejectedRequests ?? 0,
      color: COLORS.red,
    },
  ].filter((d) => d.value > 0);

  const requestBarData = [
    { name: "Pending", count: stats.pendingRequests ?? 0 },
    { name: "Approved", count: stats.approvedRequests ?? 0 },
    { name: "Completed", count: stats.completedRequests ?? 0 },
    { name: "Rejected", count: stats.rejectedRequests ?? 0 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* User Distribution Pie Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
          User Distribution
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Tenants vs Landlords
        </p>
        {userDistData.length > 0 ? (
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={userDistData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
              >
                {userDistData.map((entry, index) => (
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
            No data available
          </div>
        )}
      </div>

      {/* Property Status Bar Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
          Property Status
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Available vs Unavailable
        </p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={propertyData} barSize={40}>
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
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "11px" }}
            />
            <Bar
              dataKey="Available"
              fill={COLORS.emerald}
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="Unavailable"
              fill={COLORS.rose}
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Request Status Bar Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
          Rental Requests
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          Status breakdown
        </p>
        {requestStatusData.length > 0 ? (
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={requestBarData} barSize={28}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  fontSize: "12px",
                  border: "1px solid #e2e8f0",
                }}
              />
              <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                {requestBarData.map((entry, index) => {
                  const colors = [
                    COLORS.amber,
                    COLORS.green,
                    COLORS.teal,
                    COLORS.red,
                  ];
                  return (
                    <Cell key={`cell-${index}`} fill={colors[index % 4]} />
                  );
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-[220px] flex items-center justify-center text-xs text-muted-foreground">
            No data available
          </div>
        )}
      </div>
    </div>
  );
}
