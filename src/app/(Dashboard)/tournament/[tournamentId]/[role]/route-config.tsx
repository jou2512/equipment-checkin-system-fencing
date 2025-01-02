// src/app/tournament/[tournamentId]/[role]/route-config.tsx
import { ComponentType } from "react";
import { Home, Package, CheckSquare, Projector, BarChart } from "lucide-react";

// // Participant Components
// import { ParticipantDashboard } from "./components/participant/dashboard";
// import { ParticipantCheckIns } from "./components/participant/check-ins";
// import { ParticipantEquipment } from "./components/participant/equipment";

// Check-in Staff Components
import { CheckinStaffDashboard } from "./components/checkin-staff/dashboard";
// import { EquipmentSubmission } from "./components/checkin-staff/equipment-submission";
// import { StatusChecking } from "./components/checkin-staff/status-checking";
// import { DisplayBoard } from "./components/checkin-staff/display-board";

// Type definitions for route configuration
export interface RouteConfig {
  component: ComponentType;
  icon?: any;
  label: string;
}

export const TOURNAMENT_ROUTES = {
  participant: {
    // dashboard: {
    //   component: ParticipantDashboard,
    //   icon: Home,
    //   label: "Home",
    // },
    // "check-ins": {
    //   component: ParticipantCheckIns,
    //   icon: CheckSquare,
    //   label: "My Check-ins",
    // },
    // equipment: {
    //   component: ParticipantEquipment,
    //   icon: Package,
    //   label: "Equipment",
    // },
  },
  "checkin-staff": {
    dashboard: {
      component: CheckinStaffDashboard,
      icon: BarChart,
      label: "Dashboard",
    },
    // "equipment-submission": {
    //   component: EquipmentSubmission,
    //   icon: Package,
    //   label: "Equipment",
    // },
    // "status-checking": {
    //   component: StatusChecking,
    //   icon: CheckSquare,
    //   label: "Check Status",
    // },
    // "display-board": {
    //   component: DisplayBoard,
    //   icon: Projector,
    //   label: "Display",
    // },
  },
};

// Utility function to get route configuration
export function getRouteComponent(role: string, route: string) {
    // Validate role and route exist
    // @ts-ignore
  if (!TOURNAMENT_ROUTES[role] || !TOURNAMENT_ROUTES[role][route]) {
    return null;
  }
  // @ts-ignore
  return TOURNAMENT_ROUTES[role][route].component;
}
