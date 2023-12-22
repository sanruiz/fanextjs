"use client";

import LogoIcon from "@/components/icons/logo";
import { usePathname } from "next/navigation";
import NavLink from "../link";
import useIsMobile from "@/hooks/useIsMobile";
import { useState } from "react";
import MobileMenuItem from "@/components/mobile-menu-item";
import ChevronUpCircle from "@/components/icons/chevron-up-circle";
import MobileMenu from "@/components/icons/mobile-menu";
import Link from "next/link";
import { useBreadcrumbContext } from "@/providers/breadcrumb";

type MenuItem = {
  name?: string;
  href?: string;
  label?: string;
  isInfo?: boolean;
}

type NavigationItem = {
  name: string;
  href: string;
  isGoBack?: boolean;
  menuItems?: MenuItem[];
  menuItems2?: MenuItem[];
}

type Navigation = NavigationItem[];

const navigation: Navigation = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Assisted Living",
    href: "/assisted-living"
  },
  {
    name: "Memory Care",
    href: "/memory-care"
  },
  {
    name: "More Senior Care",
    href: "#",
    menuItems2: [
      { label: "Home Care & Hospice" },
      { label: "Learn about home care and hospice services", isInfo: true },
      { name: "Home care", href: "/home-care/" },
      {
        name: "Home Health care",
        href: "/resources/senior-care/home-care/",
      },
      { name: "Hospice Care", href: "/health/" },
    ],
    menuItems: [
      { label: "Senior Living" },
      { label: "Evaluate your options for senior care", isInfo: true },
      {
        name: "Assisted Living",
        href: "/assisted-living/",
      },
      {
        name: "Independent Living",
        href: "/independent-living/",
      },
      { name: "Memory Care", href: "/memory-care/" },
      {
        name: "CCRC",
        href: "/continuing-care-retirement-communities/",
      },
      {
        name: "Nursing Homes",
        href: "/nursing-homes/",
      },
    ],
  },
  {
    name: "Senior Care resources",
    href: "#",
    menuItems: [
      { label: "Senior care resources" },
      { label: "Evaluate your options for senior care", isInfo: true },
      {
        name: "See All Resources",
        href: "/resources/",
      },
      {
        name: "Legal & Financial",
        href: "/legal-financial/",
      },
      {
        name: "Health",
        href: "/health/",
      },
      {
        name: "Government Resources",
        href: "/government-resources/",
      },
      {
        name: "Senior care",
        href: "/senior-care/",
      },
    ],
  },
];

export default function Navbar() {
  const [showMobile, setShowMobile] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { breadcrumbItems } = useBreadcrumbContext();
  if (isMobile && breadcrumbItems.length === 5) {
    const careTypeNavItem = breadcrumbItems[breadcrumbItems.length - 4];
    const stateNavItem = breadcrumbItems[breadcrumbItems.length - 3];
    const cityNavItem = breadcrumbItems[breadcrumbItems.length - 2];
    navigation[0] = {
      name: `${cityNavItem.name.replaceAll(careTypeNavItem.name, "")}, ${stateNavItem.name.replaceAll(careTypeNavItem.name, "")}`,
      href: `${cityNavItem.href}`,
      isGoBack: true
    };
  } else if (isMobile && breadcrumbItems.length) {
    navigation[0] = breadcrumbItems[0] as NavigationItem;
  }
  return (
    <header className="bg-white sticky border-b-faSilver border-b top-0 z-50 px-4">
      <div className="flex justify-between items-center md:max-w-5xl xl:max-w-6xl md:m-auto">
        <div className="flex flex-shrink-0 py-2 items-center h-14">
          <Link href="/"  ><LogoIcon /></Link>
        </div>
        {isMobile ? (
          <>
            {showMobile ? (
              <ChevronUpCircle
                width={30}
                height={30}
                stroke="#525252"
                onClick={() => setShowMobile(!showMobile)}
              />
            ) : (
              <MobileMenu
                width={30}
                height={20}
                onClick={() => setShowMobile(!showMobile)}
              />
            )}

            {showMobile && (
              <div className="absolute z-50 bg-background1 border-t-faSilver border-t flex flex-col w-screen h-screen top-14 right-0 px-8 pb-16 overflow-scroll overscroll-contain">
                {navigation.map(item => (
                  <MobileMenuItem
                    {...item}
                    key={item.name}
                    pathname={pathname}
                    onClick={() => setShowMobile(!showMobile)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <nav className="hidden md:-my-px md:flex md:space-x-4 xl:space-x-6 items-center font-semibold">
            {navigation.map((item) => (
              <NavLink {...item} key={item.name} pathname={pathname} />
            ))}
            <Link
              href="/help/"
              className=" text-faDavysGray border-solid border-faDavysGray rounded border p-1.5 px-3"
            >
              GET HELP
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
