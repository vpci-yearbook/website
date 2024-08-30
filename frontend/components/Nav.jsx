import Link from "next/link"
import { CircleUser, Instagram, Menu, Package2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Nav = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6 z-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-extrabold md:text-md whitespace-nowrap"
        >
          <p>yb @ VP.</p>
        </Link>
        <Link
          href="/gallery"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Gallery
        </Link>
        <Link
          href="/about"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
        <Link
          href="/upload"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Upload
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-extrabold md:text-md whitespace-nowrap"
            >
              <p>yb @ VP.</p>
            </Link>
            <Link
              href="/gallery"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/upload"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Upload
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Button size='icon' variant='ghost' className='ml-auto'>
          <img src="/instagram.svg" className='p-2'/>
        </Button>
        <Button size='icon' variant='ghost'>
          <img src="/discord.svg" className='p-2'/>
        </Button>
      </div>
    </header>
  )
}

export default Nav