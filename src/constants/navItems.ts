type NavItemsProps = {
  href: string;
  label: string;
};

export const navItem: NavItemsProps[] = [
  { href: "/jobs", label: "Job" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/jobs/new", label: "Add Job" },
];
