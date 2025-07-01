import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BarChart2, Library } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Link } from "react-router";
import { ThemeToggle } from "./ThemeToggle";


export function ResearchNavigation() {
  return (
    <header className="px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Main Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Library className="h-6 w-6 text-primary" />
            <Link to="/" className="text-md font-bold">
              ER Research & Enhancement center
            </Link>
          </div>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {/* Research Areas Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">
                  Research Areas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/research-areas"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 flex items-center gap-2">
                            <BarChart2 className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              Health Sciences
                            </span>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Biomedical, clinical, and public health research
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/research-areas"
                      title="Technology & Engineering"
                    >
                      Cutting-edge innovations in computing, materials, and
                      systems
                    </ListItem>
                    <ListItem
                      href="/research-areas"
                      title="Environmental Science"
                    >
                      Climate change, biodiversity, and sustainability studies
                    </ListItem>
                    <ListItem href="/research-areas" title="Social Sciences">
                      Human behavior, economics, and policy research
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Publications */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">
                  Publications
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    <ListItem
                      href="/publications"
                      title="Research Journals"
                    >
                      Peer-reviewed academic publications
                    </ListItem>
                    <ListItem
                      href="/publications"
                      title="Technical Reports"
                    >
                      In-depth analysis and white papers
                    </ListItem>
                    <ListItem href="/publications" title="Open Data">
                      Publicly available research datasets
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    className={`${navigationMenuTriggerStyle()} text-sm`}
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

               <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/request-passage"
                    className={`${navigationMenuTriggerStyle()} text-sm`}
                  >
                     Request passage
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* International */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm">
                  International
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    <ListItem
                      href="/international"
                      title="Collaborations"
                    >
                      Global research partnerships
                    </ListItem>
                    <ListItem
                      href="/international"
                      title="Funding Programs"
                    >
                      International grant opportunities
                    </ListItem>
                    <ListItem
                      href="/international"
                      title="Conferences"
                    >
                      Upcoming international events
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search research..."
              className="pl-10 w-[200px] lg:w-[300px]"
            />
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>

          {/* <Button variant="outline" size="sm" className="hidden sm:flex">
            Researcher Login
          </Button> */}
          <LanguageSelection />

          <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" className="w-8 h-8 rounded-full" />
          <AvatarFallback>CN</AvatarFallback>
         </Avatar>


          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

// popover for language
function LanguageSelection() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="uppercase">
            En
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40 bg-gray-500/40 flex flex-col gap-2  rounded-lg mt-1 mr-8 p-1">
               <Button className="w-full cursor-pointer rounded-md hover:bg-gray-200" variant="secondary">EN</Button>
               <Button className="w-full cursor-pointer rounded-md hover:bg-gray-200" variant="secondary">FA (فارسی دری)</Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}

