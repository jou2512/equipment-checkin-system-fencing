// lib/hono/hono_client.ts
import { AppType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";

export const client = hc<AppType>();