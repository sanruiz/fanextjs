import { classNames } from "@/lib/utils";
import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";
import { MenuItemsT } from '@/components/link';
import ChevronDown from '@/components/icons/chevron-down';
import SVGRightArrow from "@/components/icons/svgRightArrow";

function MobileMenuItem({
  name,
  href,
  label,
  isInfo,
  isGoBack,
  pathname,
  menuItems,
  menuItems2,
  className,
  onClick,
}: {
  name?: string;
  href?: string;
  label?: string;
  isInfo?: boolean;
  isGoBack?: boolean;
  pathname?: string;
  menuItems?: MenuItemsT;
  menuItems2?: MenuItemsT;
  className?: string;
  onClick?: MouseEventHandler;
}) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const ChevronIcon = (menuItems || menuItems2) && (
    <ChevronDown
      width={16}
      height={16}
      color="#525252"
      className={`${showSubMenu ? "transform -rotate-180" : "transform -rotate-90"}`}
    />
  );

  if (name === undefined && label === undefined) return (<></>);

  return (
    <>
      {(name === undefined && label) ? (
        (isInfo ? "" : <h6 className="bg-seafoam text-background1 my-0 p-2">{label}</h6>)
      ) :
        <div
          className={className ? className : "border-b border-dashed border-gray-300"}
        >
          {(href && href !== "#") && (name && name !== undefined) ? (
            <Link
              key={name}
              href={href === "#" ? "javascript:void(0);" : href}
              onClick={onClick}
              className={classNames(
                pathname === href
                  ? "border-seafoam active:border-seafoam py-6 w-full"
                  : "border-transparent hover:border-seafoam hover:transition-all hover:duration-500 py-6 w-full",
                "inline-flex items-center border-b-2 text-faDavysGray"
              )}
              aria-current={pathname === href ? "page" : undefined}
            >
              {isGoBack ? (<SVGRightArrow width={14} height={13} stroke="#676767" className="transform rotate-180 mr-2" />) : ""}
              {name}
            </Link>
          ) : (
            <Link
              key={name}
              href={(href === "#" || href === undefined) ? "javascript:void(0);" : href}
              onClick={() => setShowSubMenu(!showSubMenu)}
              className="flex items-center justify-between border-transparent text-faDavysGray hover:border-seafoam hover:transition-all hover:duration-500 py-6"
            >
              {name} {ChevronIcon}
            </Link>
          )}
        </div>
      }
      {showSubMenu &&
        menuItems &&
        menuItems.map((item) => (
          <MobileMenuItem
            {...item}
            onClick={onClick}
            pathname={pathname}
            key={item.name}
            className="pl-2 border-b border-dashed border-gray-300"
          />
        ))}

      {showSubMenu &&
        menuItems2 &&
        menuItems2.map((item) => (
          <MobileMenuItem
            {...item}
            onClick={onClick}
            pathname={pathname}
            key={item.name}
            className="pl-2 border-b border-dashed border-gray-300"
          />
        ))}
    </>
  );
}

export default MobileMenuItem;
