import React from 'react';
import Link from 'next/link';
import MenuPopUp from '@/components/menu-pop-up';
import { classNames } from '@/lib/utils';

type MenuItemT = {
  iconSrc?: string;
  label?: string;
  name?: string;
  href?: string;
  isInfo?: boolean;
};

export type MenuItemsT = MenuItemT[];

function NavLink({
  name,
  href,
  pathname,
  menuItems,
  menuItems2
}: {
  name: string;
  href: string;
  pathname: string;
  menuItems?: MenuItemsT;
  menuItems2?: MenuItemsT;
}) {

  if (!menuItems)
    return (
      <Link
        key={name}
        href={href}
        scroll={false}
        className={classNames(
          pathname === href
            ? 'border-seafoam text-faDavysGray'
            : 'border-transparent text-faDavysGray hover:border-seafoam hover:transition-all hover:duration-500 ',
          'inline-flex items-center px-1 pt-1 border-b-2'
        )}
        aria-current={pathname === href ? 'page' : undefined}
      >
        {name}
      </Link>
    );

  return (
    <MenuPopUp
      name={name}
      key={name}
      href={href}
      pathname={pathname}
      menuItems={menuItems}
      menuItems2={menuItems2}
      aria-current={pathname === href ? 'page' : undefined}
    />
  );
}

export default NavLink;
