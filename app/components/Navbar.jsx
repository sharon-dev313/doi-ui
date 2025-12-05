import { useState, useEffect } from 'react'
import {
  Navbar as NavbarDefault,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  cn
} from '@heroui/react'
import { Icon } from '@iconify/react'

import { Logo } from '@components'

const NAV_ITEMS = [
  {
    label: "Membership",
    children: [
      {
        label: "DOI Token",
        href: "/doi-token",
        description: "Get started with DOI membership tokens"
      },
      {
        label: "DOI Gold",
        href: "/doi-gold",
        description: "Upgrade to Gold membership for exclusive benefits"
      }
    ]
  },
  {
    label: "Investments",
    children: [
      {
        label: "How it works",
        href: "/investments",
        description: "Get started with DOI membership tokens"
      },
      {
        label: "Find investments",
        href: "/investments/search",
        description: "Search for properties to invest in"
      }
    ]    
  },
  {
    label: "Sweepstakes",
    children: [
      {
        label: "Active Raffles",
        href: "/sweepstakes",
        description: "Enter our current sweepstakes"
      },
      {
        label: "Past Winners",
        href: "/sweepstakes/winners",
        description: "View previous sweepstakes winners"
      }
    ]
  },
  {
    label: "DOI Properties", 
    href: "doi-properties"
  },
  {
    label: "DOI Construction",
    children: [
      {
        label: "For developers",
        href: "/doi-developer",
        description: "We can help you build it smarter"
      },
      {
        label: "For clients",
        href: "/doi-customer", 
        description: "If you can imagine it, we can build it for you"
      }
    ]
  }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <section className="w-full bg-main">
      <NavbarDefault
        shouldHideOnScroll
        maxWidth="xl"
        classNames={{
          base: cn(
            "fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-300",
            isScrolled 
              ? "bg-foreground backdrop-blur-md backdrop-saturate-150 shadow-sm" 
              : "bg-transparent backdrop-blur-none backdrop-saturate-100"
          ),
          item: "hidden md:flex",
        }}
        height="58px"
      >
        <div className="text-background">
          <Logo />
        </div>                     
        <NavbarContent justify="center" className="justify-center border-small bg-foreground border-default-200/20 shadow-medium gap-4 rounded-full px-8 backdrop-blur-md backdrop-saturate-150">
          <NavbarMenuToggle className="text-default-400 ml-2 md:hidden" />
          {NAV_ITEMS.map((item) => (
            item.children ? (
              <Dropdown key={item.label} className='bg-main'>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white font-nasa text-sm font-bold"
                      endContent={<Icon icon="mdi:chevron-down" width={20} />}
                    >
                      {item.label}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label={`${item.label} menu`}
                  className="w-[340px] bg-main"
                  itemClasses={{
                    base: "gap-5 text-white font-nasa",
                  }}
                >
                  {item.children.map((child) => (
                    <DropdownItem
                      key={child.href}
                      description={child.description}
                      href={child.href}
                    >
                      {child.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem key={item.href} isActive={false}>
                <Link 
                  className={cn(
                    "text-white font-nasa text-sm font-bold",
                  )} 
                  href={`/${item.href}`}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            )
          ))}
        </NavbarContent>
        <Button 
          variant="solid" 
          color="primary" 
          radius="full"
          className="font-nasa uppercase tracking-wider"
          size="lg"
        >
          Login
        </Button>
        <NavbarMenu
          className="rounded-large border-small border-default-200/20 bg-background/60 shadow-medium top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[40vh] max-w-[80vw] py-6 backdrop-blur-md backdrop-saturate-150"
          motionProps={{
          initial: {opacity: 0, y: -20},
          animate: {opacity: 1, y: 0},
          exit: {opacity: 0, y: -20},
          transition: {
              ease: "easeInOut",
              duration: 0.2,
          },
          }}
        >
          {NAV_ITEMS.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="text-white font-nasa text-sm font-bold w-full" href="#" size="md">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarDefault>      
    </section>
  )
}