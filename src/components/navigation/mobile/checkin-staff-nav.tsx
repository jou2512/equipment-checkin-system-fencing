// src/components/navigation/checkin-staff-nav.tsx
"use client";

import { useState } from "react";
import { Package, CheckSquare, BarChart, Projector, Menu } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export function CheckinStaffNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const { tournamentId, role } = params;

  const navItems = [
    {
      href: `/tournament/${tournamentId}/${role}/dashboard`,
      icon: <BarChart className="inline mr-2" />,
      label: "Dashboard",
    },
    {
      href: `/tournament/${tournamentId}/${role}/equipment-submission`,
      icon: <Package className="inline mr-2" />,
      label: "Equipment Submission",
    },
    {
      href: `/tournament/${tournamentId}/${role}/status-checking`,
      icon: <CheckSquare className="inline mr-2" />,
      label: "Status Checking",
    },
    {
      href: `/tournament/${tournamentId}/${role}/display-board`,
      icon: <Projector className="inline mr-2" />,
      label: "Display Board",
    },
  ];

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          {/* <button onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button> */}
          <h1 className="text-xl font-bold">Check-in Staff</h1>
        </div>
      </div>

      {/* {isOpen && (
        <div className="absolute z-50 w-full bg-white shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-4 hover:bg-gray-100"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      )} */}
    </nav>
  );
}
