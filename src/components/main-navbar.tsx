"use client"

import React from 'react';
import { cn } from '@/lib/utils'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import {
  XMarkIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'

interface Navigation {
  name: string,
  href: string,
  current: boolean,
}

const navigationDetails: Navigation[] = [
  {
    name: "Home",
    href: "#",
    current: false,
  },
  {
    name: "Experiences",
    href: "#",
    current: false,
  },
  {
    name: "Projects",
    href: "#",
    current: false,
  },
  {
    name: "Skills",
    href: "#",
    current: false,
  },
]

const MainNavbar = () => {
  return (
    <Disclosure as="nav" className="bg-zinc-800 fixed inset-y-3 h-16 inset-x-5 rounded-lg z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-3 flex items-center sm:hidden">
                <DisclosureButton
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5"/>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className="font-bold text-white text-2xl h-8 w-auto">PNW</span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigationDetails.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          item.current ? 'bg-zinc-900 text-white' : 'bg-zinc-800 hover:bg-zinc-700 hover:text-white',
                          'rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DisclosurePanel className="sm:hidden">
            <div className="relative -top-2 space-y-1 px-2 pb-2 pt-2 bg-zinc-800 rounded-b-lg">
              {navigationDetails.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cn(
                    item.current ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default MainNavbar;
