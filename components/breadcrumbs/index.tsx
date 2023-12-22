"use client"

import Link from "next/link";
import React, { useEffect, useMemo } from "react";
import { BreadcrumbItem } from "@/types/common";
import { useBreadcrumbContext } from "@/providers/breadcrumb";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

function Breadcrumbs({ items }: BreadcrumbsProps) {
  const SvgArrow = () => (
    <svg
      role="separator"
      className="w-4 h-4 text-faGray"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  const breadcrumbItems = useMemo(() => {
    const itemsCopy = [...items];
    return itemsCopy
  }, [items]);

  const { setBreadcrumbItems } = useBreadcrumbContext();
  useEffect(() => {
    setBreadcrumbItems(breadcrumbItems);
  }, [breadcrumbItems, setBreadcrumbItems]);

  // Remove home link from community page
  (items.length === 5) && items.shift();

  return (
    <nav aria-label="breadcrumbs" className="breadcrumbs hidden md:flex items-center space-x-2 text-faGray text-sm mt-8 mb-4">
      <ol className="flex list-none p-0">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {!isLastItem ? (
                <Link href={item.href || "#"} className="text-faGray hover:text-faGray underline">
                  {item.name}
                </Link>
              ) : (
                <span>{item.name}</span>
              )}
              {!isLastItem && <SvgArrow />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;