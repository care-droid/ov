"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  LayoutDashboard,
  Package,
  Info,
  ShoppingCart,
  FileText,
  Clock,
  Truck,
  Bell,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ACCENT = "#0d387f";

type Screen = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
};

const screens: Screen[] = [
  {
    id: 1,
    title: "Login Screen",
    description: "Secure authentication with role-based access for distributors.",
    icon: Smartphone,
    features: ["Secure authentication", "Role-based access", "Multi-device support"],
  },
  {
    id: 2,
    title: "Home Dashboard",
    description: "Quick overview of recent orders, announcements, and featured products.",
    icon: LayoutDashboard,
    features: ["Recent orders", "Announcements", "Featured products", "Quick actions"],
  },
  {
    id: 3,
    title: "Product Catalogue",
    description: "Browse products with high-resolution images, specifications, and variants.",
    icon: Package,
    features: ["High-resolution images", "Product specifications", "Variant display", "Category filters"],
  },
  {
    id: 4,
    title: "Product Detail Screen",
    description: "View complete product information, available sizes, colours, pricing, and packaging.",
    icon: Info,
    features: ["Complete product info", "Size availability", "Colour options", "Pricing", "Packaging details"],
  },
  {
    id: 5,
    title: "Cart Screen",
    description: "Review selected products, modify quantities, and confirm orders.",
    icon: ShoppingCart,
    features: ["Selected products", "Quantity modification", "Order review", "Confirmation"],
  },
  {
    id: 6,
    title: "Order Summary",
    description: "Verify order details before final submission.",
    icon: FileText,
    features: ["Order verification", "Item details", "Total calculation", "Final submission"],
  },
  {
    id: 7,
    title: "Order History",
    description: "Access previous orders and reorder products in just a few taps.",
    icon: Clock,
    features: ["Previous orders", "Reorder option", "Purchase history", "Order details"],
  },
  {
    id: 8,
    title: "Order Tracking",
    description: "Track every stage of the order—from confirmation to delivery.",
    icon: Truck,
    features: ["Order confirmation", "Dispatch tracking", "Delivery updates", "Real-time status"],
  },
  {
    id: 9,
    title: "Notifications",
    description: "Stay updated with order status, product launches, and promotional schemes.",
    icon: Bell,
    features: ["Order status updates", "Product launches", "Promotional schemes", "Alerts"],
  },
  {
    id: 10,
    title: "Profile & Account",
    description: "Manage user information, delivery addresses, and account settings.",
    icon: User,
    features: ["User information", "Delivery addresses", "Account settings", "Preferences"],
  },
];

export default function DistributorScreens() {
  const [active, setActive] = useState(0);
  const current = screens[active];
  const Icon = current.icon;

  return (
    <section className="relative w-full bg-[#F5F0EB] py-20 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="text-center mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E1423]">
            SCREENS
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#2A1216] leading-[1.05] font-medium mt-3">
            Intuitive Screens Designed for Faster Ordering
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Every screen in OVENTRA is built to make ordering simple, intuitive, and efficient.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Screen mockup */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[280px] h-[560px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-200 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-200 rounded-b-xl" />
              <div className="px-6 pt-12 pb-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6E1423]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#6E1423]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">{current.title}</h3>
                    <p className="text-[10px] text-gray-400">Step {String(current.id).padStart(2, "0")}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {current.description}
                </p>
                <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  {current.features.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 py-1.5 border-b border-gray-100 last:border-0"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6E1423]" />
                      <span className="text-xs text-gray-700">{f}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 h-1 w-12 bg-gray-200 rounded-full mx-auto" />
              </div>
            </div>
          </div>

          {/* Screen navigation */}
          <div className="flex-1 w-full max-w-md">
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {screens.map((screen, i) => {
                const isActive = i === active;
                const ScreenIcon = screen.icon;
                return (
                  <button
                    key={screen.id}
                    onClick={() => setActive(i)}
                    className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all text-left ${
                      isActive
                        ? "bg-[#6E1423] text-white shadow-lg"
                        : "bg-white hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isActive ? "bg-white/20" : "bg-gray-100"
                      }`}
                    >
                      <ScreenIcon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-600"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${isActive ? "text-white" : "text-gray-800"}`}>
                        {screen.title}
                      </p>
                      <p className={`text-xs truncate ${isActive ? "text-white/70" : "text-gray-400"}`}>
                        {screen.description}
                      </p>
                    </div>
                    <span className={`text-xs font-mono ${isActive ? "text-white/50" : "text-gray-300"}`}>
                      {String(screen.id).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setActive((a) => (a - 1 + screens.length) % screens.length)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <span className="text-sm text-gray-500">
                {String(active + 1).padStart(2, "0")} / {String(screens.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => setActive((a) => (a + 1) % screens.length)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
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