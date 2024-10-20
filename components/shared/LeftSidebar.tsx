"use client"

import { sidebarLinks } from "@/constants"
import { SignedIn, SignOutButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const LeftSidebar = () => {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 left-0 z-20 w-fit h-screen pt-28 px-6 pb-5 bg-color-1 border-r border-r-color-2 md:flex hidden flex-col justify-between">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = (pathname.includes(item.link) && item.link.length > 1) || pathname === item.link

          return (
            <Link
              key={item.title}
              href={item.link}
              className={`p-4 hover:bg-color-3 rounded-lg flex items-center gap-4 ${isActive && "bg-color-3 hover:bg-color-3/90"}`}
            >
              <Image 
                src={item.imgUrl}
                alt={item.title}
                width={24}
                height={24}
                className="object-contain"
              />

              <p className="text-white max-lg:hidden">
                {item.title}
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

            <p className="text-color-4 max-lg:hidden">
              Logout
            </p>
          </div>
        </SignOutButton>
      </SignedIn>
    </div>
  )
}

export default LeftSidebar