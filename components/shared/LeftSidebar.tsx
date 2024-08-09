"use client"

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { SignedIn, SignOutButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const LeftSidebar = () => {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 left-0 z-20 w-fit h-screen px-6 pt-28 pb-5 bg-color-1 border-r border-r-color-2 overflow-auto custom-scrollbar md:flex hidden flex-col justify-between">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname.startsWith(link.route) || pathname === link.route

          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn("p-4 rounded-lg flex items-center gap-4", { "bg-color-3": isActive })}
            >
              <Image 
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
                className="object-contain"
              />

              <p className="text-white capitalize max-lg:hidden">
                {link.label}
              </p>
            </Link>
          )
        })}
      </div>

      <SignedIn>
        <SignOutButton>
          <div className="p-4 cursor-pointer flex items-center gap-4">
            <Image 
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
              className="object-contain"
            />

            <p className="text-color-4 capitalize max-lg:hidden">
              Logout
            </p>
          </div>
        </SignOutButton>
      </SignedIn>
    </div>
  )
}

export default LeftSidebar