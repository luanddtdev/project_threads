"use client"

import { sidebarLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Bottombar = () => {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 xs:px-7 p-4 bg-color-5 rounded-t-3xl md:hidden flex-between xs:gap-5 gap-3">
      {sidebarLinks.map((item) => {
        const isActive = (pathname.includes(item.link) && item.link.length > 1) || pathname === item.link

        return (
          <Link
            key={item.title}
            href={item.link}
            className={`p-2 sm:py-2.5 hover:bg-color-3 rounded-lg flex sm:flex-1 flex-col items-center gap-2 ${isActive && "bg-color-3 hover:bg-color-3/90"}`}
          >
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={24}
              height={24}
              className="object-contain"
            />

            <p className="text-12-medium text-white max-sm:hidden">
              {item.title.split(/\s+/)[0]}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default Bottombar