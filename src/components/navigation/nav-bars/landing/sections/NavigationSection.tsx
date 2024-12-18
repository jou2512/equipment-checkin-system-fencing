import { LandingNavigationBarRouteItem } from "@/lib/types/landing-navigation-bar";
import { LandingNavigationBarRouteItems } from "../elements/landing-navigation-bar-route-iItem";

export function NavigationSection({
  items,
}: {
  items: LandingNavigationBarRouteItem[];
}) {
  return <LandingNavigationBarRouteItems items={items} />;
}
