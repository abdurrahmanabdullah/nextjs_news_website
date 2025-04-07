"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-6 lg:px-8">
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>
        {/*Navigation   */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* News */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/news"
                className={`${
                  pathname === "/news" ? "text-red-500 font-semibold" : ""
                }hover:text-red-500`}>
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services with dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 space-y-2">
                  <li>
                    <NavigationMenuLink href="/services/Web">
                      Web Development
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/App">
                      Mobile App
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={`${
                  pathname === "/about" ? "text-red-500 font-semibold" : ""
                }hover:text-red-500`}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* color switch and login button  */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex item-center">
            {" "}
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Button</Button>
        </div>
        {/*mobile hamber menu   */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
