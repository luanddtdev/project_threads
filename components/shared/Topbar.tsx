import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 px-6 py-3 bg-color-1 flex-between">
      <Link
        href="/"
        className="flex items-center gap-4"
      >
        <Image 
          src="/assets/icons/logo.svg"
          alt="threads"
          width={28}
          height={28}
          className="object-contain"
        />

        <h2 className="text-24-bold text-white max-xs:hidden">
          Threads
        </h2>
      </Link>

      <div className="flex items-center gap-1">
        <SignedIn>
          <SignOutButton>
            <Image 
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
              className="object-contain cursor-pointer md:hidden"
            />
          </SignOutButton>
        </SignedIn>

        <OrganizationSwitcher 
          appearance={{
            elements: {
              organizationSwitcherTrigger: "px-4 py-2"
            }
          }}
        />
      </div>
    </div>
  )
}

export default Topbar