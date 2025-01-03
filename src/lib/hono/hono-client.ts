import { AppType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";


export const hono_client = hc<AppType>(process.env.NEXT_PUBLIC_APP_UR!, {
    headers: {
            Authorization: `Bearer ${process.env.HONO_API_TOKEN}`,
        },
})