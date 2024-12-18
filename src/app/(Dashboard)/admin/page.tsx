"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  ComposedChart,
  Line,
  LabelList,
} from "recharts";
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  Package,
  Swords,
  Globe,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { databases } from "@/lib/appwrite/config";
import { generateMockCheckInData } from "@/lib/mock-data/check-in-mock";
import {
  COLLECTION_IDS,
  CheckIn,
  DATABASE_IDS,
  TournamentActiveWeaponsType,
} from "@/lib/appwrite/types";

// Visualization Options
const DATA_VIEWS = [
  {
    key: "submissions",
    label: "Submissions Overview",
    icon: Trophy,
  },
  {
    key: "weapons",
    label: "Weapon Distribution",
    icon: Swords,
  },
  {
    key: "nationalities",
    label: "Nationality Breakdown",
    icon: Globe,
  },
];

// Utility function to group check-ins by time range
const calculateHourlyData = (checkIns: CheckIn[], range: number = 1) => {
  if (!checkIns || checkIns.length === 0) return [];

  // Sort check-ins by creation time
  const sortedCheckIns = [...checkIns].sort(
    (a, b) =>
      new Date(a.$createdAt as string).getTime() -
      new Date(b.$createdAt as string).getTime()
  );

  // Find the earliest check-in time
  const earliestTime = new Date(sortedCheckIns[0].$createdAt as string);
  const latestTime = new Date(
    sortedCheckIns[sortedCheckIns.length - 1].$createdAt as string
  );

  // Calculate total hours spanned
  const totalHours = Math.ceil(
    (latestTime.getTime() - earliestTime.getTime()) / (1000 * 60 * 60)
  );

  // Initialize hourly data object
  const hourlyData: Record<
    string,
    {
      submissions: number;
      completedChecks: number;
      failedChecks: number;
    }
  > = {};

  // Group check-ins into hourly slots
  sortedCheckIns.forEach((checkIn) => {
    const checkInTime = new Date(checkIn.$createdAt as string);

    // Calculate hours since earliest time
    const hoursSinceStart = Math.floor(
      (checkInTime.getTime() - earliestTime.getTime()) / (1000 * 60 * 60)
    );

    // Create time slot key
    const timeSlotKey = `${Math.floor(hoursSinceStart / range) * range}-${
      Math.floor(hoursSinceStart / range) * range + range
    }`;

    // Initialize slot if not exists
    if (!hourlyData[timeSlotKey]) {
      hourlyData[timeSlotKey] = {
        submissions: 0,
        completedChecks: 0,
        failedChecks: 0,
      };
    }

    // Count submissions
    hourlyData[timeSlotKey].submissions++;

    // Count completed and failed checks
    if (checkIn.CheckInStatus === "approved") {
      hourlyData[timeSlotKey].completedChecks++;
    } else if (
      checkIn.CheckInStatus === "rejected" ||
      checkIn.CheckInStatus === "partially_approved"
    ) {
      hourlyData[timeSlotKey].failedChecks++;
    }
  });

  // Convert to array format for charting
  return Object.entries(hourlyData)
    .map(([hour, data]) => ({
      hour,
      ...data,
    }))
    .sort((a, b) => {
      const [aStart] = a.hour.split("-").map(Number);
      const [bStart] = b.hour.split("-").map(Number);
      return aStart - bStart;
    });
};

export default function AdminDashboardPage() {
  const [selectedView, setSelectedView] = useState("submissions");
  const [hourlyRange, setHourlyRange] = useState(1);

  const [useRealData, setUseRealData] = useState(false);

  // Modify the query to support mock data
  const { data: checkIns, isLoading } = useQuery<CheckIn[]>({
    queryKey: ["checkInStatistics", useRealData],
    queryFn: async () => {
      if (useRealData) {
        // Fetch real data from Appwrite
        const response = await databases.listDocuments(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.CHECKINS
        );
        return response.documents as CheckIn[];
      } else {
        // Generate mock data
        return generateMockCheckInData(100);
      }
    },
    // Optional: control refetching
    refetchOnWindowFocus: useRealData,
  });

  // Memoized hourly data calculation
  const hourlySubmissionData = useMemo(() => {
    return checkIns ? calculateHourlyData(checkIns, hourlyRange) : [];
  }, [checkIns, hourlyRange]);

  // Comprehensive statistics calculation
  const calculateStatistics = () => {
    if (!checkIns)
      return {
        totalSubmissions: 0,
        pendingChecks: 0,
        completedChecks: 0,
        unPickedBags: 0,
        failedChecks: 0,
        pending: 0,
        in_review: 0,
        approved: 0,
        rejected: 0,
        partially_approved: 0,

        weaponDistribution: {},
        nationalityBreakdown: {},
      };

    const weaponDistribution: Record<TournamentActiveWeaponsType, number> = {
      epee: 0,
      foil: 0,
      sabre: 0,
    };

    const nationalityBreakdown: Record<string, number> = {};

    checkIns.forEach((checkIn) => {
      // Weapon distribution
      if (checkIn.weaponType) {
        weaponDistribution[checkIn.weaponType as TournamentActiveWeaponsType]++;
      }

      // Nationality breakdown
      if (checkIn.nationalityCode) {
        nationalityBreakdown[checkIn.nationalityCode] =
          (nationalityBreakdown[checkIn.nationalityCode] || 0) + 1;
      }
    });

    return {
      totalSubmissions: checkIns.length,
      pendingChecks: checkIns.filter(
        (ci) =>
          ci.CheckInStatus === "pending" || ci.CheckInStatus === "in_review"
      ).length,
      completedChecks: checkIns.filter(
        (ci) =>
          ci.CheckInStatus === "approved" ||
          ci.CheckInStatus === "partially_approved" ||
          ci.CheckInStatus === "rejected"
      ).length,
      unPickedBags: checkIns.filter(
        (ci) =>
          !ci.pickupConfirmed &&
          (ci.CheckInStatus === "approved" ||
            ci.CheckInStatus === "partially_approved" ||
            ci.CheckInStatus === "rejected")
      ).length,
      failedChecks: checkIns.filter(
        (ci) =>
          ci.CheckInStatus === "rejected" ||
          ci.CheckInStatus === "partially_approved"
      ).length,
      pending: checkIns.filter((ci) => ci.CheckInStatus === "pending").length,
      in_review: checkIns.filter((ci) => ci.CheckInStatus === "in_review")
        .length,
      partially_approved: checkIns.filter(
        (ci) => ci.CheckInStatus === "partially_approved"
      ).length,
      approved: checkIns.filter((ci) => ci.CheckInStatus === "approved").length,
      rejected: checkIns.filter((ci) => ci.CheckInStatus === "rejected").length,
      weaponDistribution,
      nationalityBreakdown,
    };
  };

  const stats = calculateStatistics();

  // Revised pickup statistics calculation
  const calculatePickupStatistics = () => {
    if (!checkIns) return [];

    // Group check-ins by status
    const pickupStats = {
      picked: checkIns.filter((checkIn) => checkIn.pickupConfirmed).length,
      unpicked: stats.unPickedBags,
      pending: stats.pendingChecks,
    };

    // Create data format suitable for stacked bar chart
    return [
      {
        status: "Pickup Status",
        picked: pickupStats.picked,
        unpicked: pickupStats.unpicked,
        pending: pickupStats.pending,
        total: checkIns.length,
      },
    ];
  };

  const chartPickupData = calculatePickupStatistics();

  // Prepare data for different views
  const prepareChartData = (): {
    name: string;
    value: number;
    color?: string;
  }[] => {
    switch (selectedView) {
      case "weapons":
        return Object.entries(stats.weaponDistribution).map(
          ([name, value]) => ({
            name,
            value,
            color:
              name === "epee"
                ? "#0088FE"
                : name === "foil"
                ? "#00C49F"
                : "#FFBB28",
          })
        );

      case "nationalities":
        return Object.entries(stats.nationalityBreakdown)
          .map(([name, value]) => ({ name, value }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 5); // Top 5 nationalities

      default:
        return [
          { name: "Pending", value: calculateStatistics().pending },
          { name: "In Review", value: calculateStatistics().in_review },
          {
            name: "Partially Approved",
            value: calculateStatistics().partially_approved,
          },
          { name: "Approved", value: calculateStatistics().approved },
          { name: "Rejected", value: calculateStatistics().rejected },
        ];
    }
  };

  const chartData = prepareChartData();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <div className="flex space-x-2">
          {DATA_VIEWS.map((view) => (
            <Button
              key={view.key}
              variant={selectedView === view.key ? "default" : "outline"}
              onClick={() => setSelectedView(view.key)}
              className="flex items-center"
            >
              <view.icon className="mr-2 h-4 w-4" />
              {view.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Data Source Toggle */}
      <div className="flex justify-start mb-4">
        <Button
          variant={useRealData ? "default" : "outline"}
          onClick={() => setUseRealData(true)}
          className="mr-2"
        >
          Real Data
        </Button>
        <Button
          variant={!useRealData ? "default" : "outline"}
          onClick={() => setUseRealData(false)}
        >
          Mock Data
        </Button>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Submissions
            </CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSubmissions}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Checks
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingChecks}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unpicked Bags</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.unPickedBags}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Checks</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.failedChecks}</div>
          </CardContent>
        </Card>
      </div>

      {/* Dynamic Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedView === "submissions" && "Check-in Status Distribution"}
              {selectedView === "weapons" && "Weapon Type Distribution"}
              {selectedView === "nationalities" && "Top Nationality Breakdown"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color || `hsl(${index * 137.5}, 70%, 50%)`}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [value, name]}
                  contentStyle={{ backgroundColor: "#f5f5f5" }}
                />
                <Legend
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detailed Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="value" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Pickup Status Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartPickupData}
                layout="vertical" // Change to vertical layout for better readability
                width={500}
                height={300}
              >
                <XAxis type="number" />
                <YAxis dataKey="status" type="category" />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-4 border rounded shadow">
                          <p>Total Bags: {data.total}</p>
                          <p>Picked Up: {data.picked}</p>
                          <p>Unpicked: {data.unpicked}</p>
                          <p>Pending: {data.pending}</p>
                          <p>
                            Pickup Rate:{" "}
                            {((data.picked / data.total) * 100).toFixed(2)}%
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="picked" stackId="a" fill="#82ca9d">
                  <LabelList dataKey="picked" position="inside" fill="white" />
                </Bar>
                <Bar dataKey="unpicked" stackId="a" fill="#ff7300">
                  <LabelList
                    dataKey="unpicked"
                    position="inside"
                    fill="white"
                  />
                </Bar>
                <Bar dataKey="pending" stackId="a" fill="#450a0a">
                  <LabelList dataKey="pending" position="inside" fill="white" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Hourly Submissions Analysis</CardTitle>
            <div className="flex space-x-2">
              {[1, 2, 4].map((range) => (
                <Button
                  key={range}
                  variant={hourlyRange === range ? "default" : "outline"}
                  onClick={() => setHourlyRange(range)}
                  size="sm"
                >
                  {range} Hour{range > 1 ? "s" : ""}
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={hourlySubmissionData}>
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-4 border rounded shadow">
                          <p>Time Slot: {data.hour}</p>
                          <p>Total Submissions: {data.submissions}</p>
                          <p>Completed Checks: {data.completedChecks}</p>
                          <p>Failed Checks: {data.failedChecks}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="submissions"
                  barSize={20}
                  fill="#8884d8"
                  name="Total Submissions"
                />
                <Line
                  type="monotone"
                  dataKey="completedChecks"
                  stroke="#82ca9d"
                  name="Completed Checks"
                />
                <Line
                  type="monotone"
                  dataKey="failedChecks"
                  stroke="#ff7300"
                  name="Failed Checks"
                />
                <Legend />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
