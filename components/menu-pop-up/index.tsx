import { classNames } from '@/lib/utils';
import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { MenuItemsT } from '@/components/link';

function MenuContent({
  label,
  isInfo,
  index,
  href,
  name,
  menuItems
}: {
  label?: string;
  isInfo?: boolean;
  index: number;
  menuItems: MenuItemsT;
  href?: string;
  name?: string;
}) {
  return (
    <>
      {label && !isInfo && (
        <p className='text-xl text-faDavysGray font-semibold'>{label}</p>
      )}
      {isInfo && (
        <p className='text-xs text-black font-openSans font-normal border-b'>{label}</p>
      )}
     
      {href && (
         <Popover.Button as={Link}
          href={href}
          className='text-faDavysGray font-openSans text-lg py-4 border-b'
        >
          {name}
        </Popover.Button>
        
      )}
 {/* {index > 1 && index !== menuItems.length && (
        <div className='w-full h-[1px] bg-slate-200' />
      )} */}
    </>
  );
}

const MenuPopUp = ({
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
}) => {
  return (
    <Popover className='relative'>
      <Popover.Button
        className={classNames(
          pathname === href
            ? 'border-seafoam'
            : 'border-transparent hover:border-seafoam hover:transition-all hover:duration-500 ',
          'inline-flex items-center px-1 pt-1 border-b-2 text-faDavysGray'
        )}
      >
        {name}
      </Popover.Button>

      <Popover.Panel
        className={`absolute z-10 bg-white py-9 right-0 px-4 shadow-md rounded-md  min-w-max font-montserrat ${
          menuItems2 ? 'grid grid-cols-2 gap-8' : 'flex flex-col'
        }`}
      >
        <div className='flex flex-col'>
          {menuItems &&
            menuItems.map((item, index) => (
              <MenuContent
                {...item}
                index={index}
                key={`${index}${item.label}-menuItem`}
                menuItems={menuItems}
              />
            ))}
        </div>
        <div className='flex flex-col '>
          {menuItems2 &&
            menuItems2.map((item, index) => (
              <MenuContent
                {...item}
                index={index}
                key={`${index}${item.label}-menuItem2`}
                menuItems={menuItems2}
              />
            ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default MenuPopUp;
