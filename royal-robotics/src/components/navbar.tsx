"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
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
          ? "bg-black/60 border-b border-red-900/20 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl md:text-lg lg:text-xl font-bold text-white whitespace-nowrap">
            <span className="text-red-600">ROYAL</span>ROBOTICS
          </span>
          <span className="hidden md:inline-block text-xs lg:text-sm text-red-500 font-medium whitespace-nowrap">
            TEAM 9562
          </span>
        </Link>

        {/* Desktop Navigation - Only visible on large screens */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]" style={{ display: 'grid', gridTemplateRows: 'auto auto auto', gridTemplateColumns: '1fr 1fr', height: '100%' }}>
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md relative overflow-hidden nav-feature-image-container"
                          href="/about"
                          style={{
                            backgroundImage: "url('/images/about_us_page/about_select.png')",
                            height: '100%',
                            gridRow: '1 / span 3',
                            gridColumn: '1'
                          }}
                        >
                          <div className="absolute inset-0 bg-black/40 z-0"></div>
                          <div className="relative z-10 mt-auto">
                            <div className="mb-2 text-lg font-medium text-white">
                              About Our Team
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Learn about our mission, team members, and achievements
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    <ListItem href="/about#mission" title="Our Mission">
                      Our commitment to robotics and STEM education
                    </ListItem>
                    <ListItem href="/about#team" title="Meet the Team">
                      The passionate students behind Royal Robotics
                    </ListItem>
                    <ListItem href="/about#awards" title="Awards">
                      Our achievements and competition results
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/donate" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Donate
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
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
                <Button variant="default" className="bg-red-600 hover:bg-red-700">
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
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="royal-gradient text-white">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-xl font-bold hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-xl font-bold hover:text-red-500 transition-colors">
                About Us
              </Link>
              <Link href="/donate" className="text-xl font-bold hover:text-red-500 transition-colors">
                Donate
              </Link>
              <Link href="/contact" className="text-xl font-bold hover:text-red-500 transition-colors">
                Contact
              </Link>
              <div className="mt-4">
                <a
                  href="https://hcdsb.schoolcashonline.com/Fee/Index"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" className="w-full bg-red-600 hover:bg-red-700">
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
