// components/landing-nav/config.ts
export interface LandingNavigationBarRouteItem {
  title: string;
  href: string;
}

export const landingConfig: {
  NavBarItems: LandingNavigationBarRouteItem[];
} = {
  NavBarItems: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Features",
      href: "/features"
    },
    {
      title: "Support",
      href: "/support"
    },
    {
      title: "About",
      href: "/about"
    }
  ]
};
