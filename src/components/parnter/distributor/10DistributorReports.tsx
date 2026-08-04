"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Package,
  FolderOpen,
  Clock,
  CheckCircle,
  MapPin,
  TrendingUp,
  Award,
  Users,
  Download,
  ArrowUpRight,
} from "lucide-react";

const ACCENT = "#0d387f";

type Report = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  metrics: string[];
};

const reports: Report[] = [
  {
    id: 1,
    title: "Distributor-wise Sales Report",
    description: "Analyse sales performance across individual distributors.",
    icon: Users,
    metrics: ["Sales volume", "Revenue", "Growth rate", "Order frequency"],
  },
  {
    id: 2,
    title: "Product-wise Order Report",
    description: "Identify your best-selling products and demand trends.",
    icon: Package,
    metrics: ["Top products", "Order volume", "Revenue per product", "Trend analysis"],
  },
  {
    id: 3,
    title: "Category-wise Sales Report",
    description: "Understand which product categories generate the highest revenue.",
    icon: FolderOpen,
    metrics: ["Category revenue", "Category growth", "Top categories", "Market share"],
  },
  {
    id: 4,
    title: "Pending Orders Report",
    description: "Track outstanding orders awaiting processing or dispatch.",
    icon: Clock,
    metrics: ["Pending count", "Processing time", "Backlog", "Aging analysis"],
  },
  {
    id: 5,
    title: "Order Status Report",
    description: "Monitor orders by status—Pending, Approved, Processing, Dispatched, or Delivered.",
    icon: CheckCircle,
    metrics: ["Status distribution", "Conversion rates", "Lead times", "Fulfilment efficiency"],
  },
  {
    id: 6,
    title: "Region-wise Performance Report",
    description: "Compare distributor performance across different territories and sales regions.",
    icon: MapPin,
    metrics: ["Regional revenue", "Distributor performance", "Market penetration", "Growth trends"],
  },
  {
    id: 7,
    title: "Sales Trend Analysis",
    description: "Visualise daily, weekly, monthly, and seasonal ordering patterns.",
    icon: TrendingUp,
    metrics: ["Trend analysis", "Seasonal patterns", "Growth forecasting", "Cycle analysis"],
  },
  {
    id: 8,
    title: "Top Products Report",
    description: "Identify high-demand products to support inventory planning and production decisions.",
    icon: Award,
    metrics: ["Bestsellers", "Demand insights", "Stock planning", "Trending products"],
  },
  {
    id: 9,
    title: "Distributor Activity Report",
    description: "Monitor distributor engagement, ordering frequency, and purchasing behaviour.",
    icon: BarChart3,
    metrics: ["Engagement metrics", "Order frequency", "Behaviour patterns", "Retention"],
  },
  {
    id: 10,
    title: "Exportable Reports",
    description: "Download reports in Excel or integrate them directly with your ERP system for advanced business analysis.",
    icon: Download,
    metrics: ["Excel export", "ERP integration", "Data extraction", "Custom reports"],
  },
];

export default function DistributorReports() {
  const [active, setActive] = useState(0);
  const current = reports[active];

  return (
    <section className="relative w-full bg-[linear-gradient(175deg,#170509_0%,#2A0A13_24%,#47111F_50%,#5C1428_74%,#741A34_100%)] py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F0DCE0]">
            REPORTS & ANALYTICS
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] font-medium mt-3">
            Actionable Reports for Better Business Decisions
          </h2>
          <p className="text-[#F0DCE0]/70 mt-4 max-w-2xl mx-auto">
            Gain complete visibility into your distribution network with powerful reports and analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {reports.map((report, i) => {
                const isActive = i === active;
                const ReportIcon = report.icon;
                return (
                  <button
                    key={report.id}
                    onClick={() => setActive(i)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                      isActive
                        ? "bg-[#6E1423]/80 text-white backdrop-blur-sm"
                        : "hover:bg-white/5 text-[#F0DCE0]/70"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isActive ? "bg-white/20" : "bg-white/5"
                      }`}
                    >
                      <ReportIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-sm font-medium truncate ${isActive ? "text-white" : "text-[#F0DCE0]"}`}>
                        {report.title}
                      </p>
                      <p className="text-xs truncate text-[#F0DCE0]/50">
                        {report.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#6E1423]/50 flex items-center justify-center">
                      <current.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {current.title}
                      </h3>
                      <p className="text-sm text-[#F0DCE0]/60">
                        {current.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#F0DCE0]/30">
                    {String(current.id).padStart(2, "0")} / {String(reports.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {current.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="bg-white/5 rounded-lg p-3 border border-white/5"
                    >
                      <div className="flex items-center gap-2">
                        <ArrowUpRight className="w-3 h-3 text-[#F0DCE0]/40" />
                        <span className="text-sm text-[#F0DCE0]/80">{metric}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#F0DCE0]/40">
                    Available for export and ERP integration
                  </span>
                  
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #6E1423;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}