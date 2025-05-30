"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 w-full",
        isScrolled
          ? "bg-black/80 border-b border-red-900/20 backdrop-blur-md shadow-md"
          : "bg-black/40 backdrop-blur-sm"
      )}
    >
      <div className="container flex items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2 pl-2">
          <img
            src="/images/branding/logo-full.png"
            alt="Royal Robotics Logo"
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop Navigation - Only visible on large screens */}
        <div className="hidden lg:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about">
                  <NavigationMenuTrigger className="cursor-pointer">About Us</NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="no-delay">
                  <ul
                    className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                    style={{
                      display: "grid",
                      gridTemplateRows: "auto auto auto",
                      gridTemplateColumns: "1fr 1fr",
                      height: "100%",
                    }}
                  >
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md relative overflow-hidden nav-feature-image-container"
                          href="/about"
                          style={{
                            backgroundImage:
                              "url('/images/about_us_page/about_select.png')",
                            height: "100%",
                            gridRow: "1 / span 3",
                            gridColumn: "1",
                          }}
                        >
                          <div className="absolute inset-0 bg-black/40 z-0"></div>
                          <div className="relative z-10 mt-auto">
                            <div className="mb-2 text-lg font-medium text-white">
                              About Our Team
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Learn about our mission, team members, and
                              achievements
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    <ListItem href="/about#mission" title="Our Mission">
                      Our commitment to robotics and STEM education
                    </ListItem>
                    <ListItem href="/about#team" title="Meet the Team">
                      The team behind Royal Robotics
                    </ListItem>
                    <ListItem href="/about#awards" title="Awards">
                      Our achievements and competition results
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/donate" className={navigationMenuTriggerStyle()}>
                  Donate
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/mentor" className={navigationMenuTriggerStyle()}>
                  Become a Mentor
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <HoverCard>
            <HoverCardTrigger asChild>
              <a
                href="https://hcdsb.schoolcashonline.com/Fee/Index"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  className="bg-red-600 hover:bg-red-700"
                >
                  Donate Now!
                </Button>
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Support Team 9562</h4>
                  <p className="text-sm">
                    Your donation helps us build robots and attend competitions!
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        {/* Medium/Small screen navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="royal-gradient text-white p-6">
            <div className="flex justify-center mb-8 mt-4">
              <img
                src="/images/branding/logo-full.png"
                alt="Royal Robotics Logo"
                className="h-12"
              />
            </div>

            <nav className="flex flex-col gap-6">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/20 transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <span className="text-lg font-medium">Home</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/20 transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
                  </svg>
                </div>
                <span className="text-lg font-medium">About Us</span>
              </Link>

              <Link
                href="/donate"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/20 transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
                  </svg>
                </div>
                <span className="text-lg font-medium">Donate</span>
              </Link>

              <Link
                href="/mentor"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/20 transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 19c3 0 5.5-3.5 5.5-7 0-1 0-3-1.5-3C14.5 9 12 12 12 12s-2.5-3-4-3c-1.5 0-1.5 2-1.5 3 0 3.5 2.5 7 5.5 7Z"/>
                    <path d="M12 8V6m0 7v2m0 6V12"/>
                  </svg>
                </div>
                <span className="text-lg font-medium">Become a Mentor</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/20 transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span className="text-lg font-medium">Contact</span>
              </Link>

              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="https://hcdsb.schoolcashonline.com/Fee/Index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="default"
                    className="w-full bg-red-600 hover:bg-red-700 py-6 text-base font-semibold"
                  >
                    Donate Now!
                  </Button>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-100 hover:text-red-900 focus:bg-red-100 focus:text-red-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
