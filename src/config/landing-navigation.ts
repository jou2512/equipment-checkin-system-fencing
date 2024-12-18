import { LandingNavigationBarRouteItem } from "@/lib/types/landing-navigation-bar";


interface LandingConfig {
  NavBarItems: LandingNavigationBarRouteItem[];
}

export const landingConfig: LandingConfig = {
  NavBarItems: [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Documentation",
    href: "/documentation",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Support",
    href: "/support",
  },
]
};
