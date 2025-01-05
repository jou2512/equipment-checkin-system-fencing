"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TestResponse {
  endpoint: string;
  status: number;
  data: any;
  error?: string;
}

export default function TestPage() {
  const [responses, setResponses] = useState<TestResponse[]>([]);
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});

  // Helper function to make API requests
  const makeRequest = async (endpoint: string, options: RequestInit = {}) => {
    setIsLoading((prev) => ({ ...prev, [endpoint]: true }));
    try {
      const response = await fetch(`/api${endpoint}`, {
        ...options,
        headers: {
          Authorization: "Bearer honoiscool",
          "Content-Type": "application/json",
          ...options.headers,
        },
      });

      const data = await response.json();

      setResponses((prev) =>
        [
          {
            endpoint,
            status: response.status,
            data,
          },
          ...prev,
        ].slice(0, 5)
      ); // Keep last 5 responses
    } catch (error) {
      setResponses((prev) =>
        [
          {
            endpoint,
            status: 500,
            data: null,
            error: error instanceof Error ? error.message : "Unknown error",
          },
          ...prev,
        ].slice(0, 5)
      );
    } finally {
      setIsLoading((prev) => ({ ...prev, [endpoint]: false }));
    }
  };

  // Test functions for each endpoint
  const tests = {
    "Basic Test": () => makeRequest("/test"),

    "List Users": () => makeRequest("/users"),

    "Update User Role": () =>
      makeRequest("/users/role", {
        method: "POST",
        body: JSON.stringify({
          userId: "123", // Test user ID
          isAdmin: true,
        }),
      }),

    "Create Team": () =>
      makeRequest("/teams/create", {
        method: "POST",
        body: JSON.stringify({
          tournamentId: "test-tournament",
          tournamentName: "Test Tournament",
          userId: "test-user",
          userEmail: "test@example.com",
          userName: "Test User",
        }),
      }),

    "Delete Team": () =>
      makeRequest("/teams/test-tournament", {
        method: "DELETE",
      }),

    "Get User Memberships": () =>
      makeRequest("/users/memberships", {
        method: "POST",
        body: JSON.stringify({
          userId: "test-user",
        }),
      }),

    "Join Team": () =>
      makeRequest("/teams/join", {
        method: "POST",
        body: JSON.stringify({
          tournamentId: "test-tournament",
          role: "participant",
          userEmail: "test@example.com",
          userId: "test-user",
          userName: "Test User",
        }),
      }),

    "Get Team Preferences": () =>
      makeRequest("/teams/prefs", {
        method: "POST",
        body: JSON.stringify({
          teamId: "test-tournament",
        }),
      }),

    "List Team Members": () =>
      makeRequest("/teams/listMembers", {
        method: "POST",
        body: JSON.stringify({
          teamId: "test-tournament",
        }),
      }),

    "Update Member Roles": () =>
      makeRequest("/teams/updateMember", {
        method: "POST",
        body: JSON.stringify({
          teamId: "test-tournament",
          memberId: "test-member",
          roles: ["participant"],
        }),
      }),

    "Get Admin Members": () =>
      makeRequest("/teams/adminMembers", {
        method: "POST",
        body: JSON.stringify({
          teamId: "test-tournament",
        }),
      }),
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">API Test Page</h1>

      {/* Test Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {Object.entries(tests).map(([name, testFn]) => (
          <Button
            key={name}
            onClick={testFn}
            disabled={isLoading[name]}
            variant={isLoading[name] ? "outline" : "default"}
            className="w-full"
          >
            {isLoading[name] ? "Testing..." : `Test ${name}`}
          </Button>
        ))}
      </div>

      {/* Response Display */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">Last 5 Responses</h2>
        {responses.map((response, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{response.endpoint}</h3>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  response.status === 200
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                Status: {response.status}
              </span>
            </div>
            {response.error ? (
              <div className="text-red-600 text-sm">
                Error: {response.error}
              </div>
            ) : (
              <pre className="text-sm bg-gray-50 p-2 rounded overflow-x-auto">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            )}
          </Card>
        ))}
      </div>

      {/* Debug Information */}
      <Card className="mt-8 p-4">
        <h2 className="font-semibold mb-2">Debug Information</h2>
        <pre className="text-sm text-gray-600">
          {`Current Path: ${
            typeof window !== "undefined" ? window.location.pathname : ""
          }\n`}
          {`Origin: ${
            typeof window !== "undefined" ? window.location.origin : ""
          }`}
        </pre>
      </Card>
    </div>
  );
}
