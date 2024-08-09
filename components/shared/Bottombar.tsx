"use client"

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Bottombar = () => {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 xs:px-7 p-4 bg-color-5 backdrop-blur-lg rounded-t-3xl md:hidden flex-between xs:gap-5 gap-3">
      {sidebarLinks.map((link) => {
        const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname.startsWith(link.route) || pathname === link.route

        return (
          <Link
            key={link.label}
            href={link.route}
            className={cn("p-2 sm:py-2.5 rounded-lg flex sm:flex-1 flex-col items-center gap-2", { "bg-color-3": isActive })}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={24}
              height={24}
              className="object-contain"
            />

            <p className="p-12-medium text-white capitalize max-sm:hidden">
              {link.label.split(/\s+/)[0]}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default Bottombar