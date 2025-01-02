// src/components/navigation/participant-nav.tsx
"use client";

import { useState } from "react";
import { Trophy, CheckSquare, User, Menu } from "lucide-react";
import Link from "next/link";

export function ParticipantNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          {/* <button onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button> */}
          <h1 className="text-xl font-bold">Tournament</h1>
        </div>
      </div>

      {/* {isOpen && (
        <div className="absolute z-50 w-full bg-white shadow-lg">
          <Link
            href="/tournament/current/dashboard"
            className="block p-4 hover:bg-gray-100"
          >
            <Trophy className="inline mr-2" /> Dashboard
          </Link>
          <Link
            href="/tournament/current/check-ins"
            className="block p-4 hover:bg-gray-100"
          >
            <CheckSquare className="inline mr-2" /> My Check-ins
          </Link>
          <Link href="/profile" className="block p-4 hover:bg-gray-100">
            <User className="inline mr-2" /> Profile
          </Link>
        </div>
      )} */}
    </nav>
  );
}
