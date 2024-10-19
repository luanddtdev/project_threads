import Bottombar from "@/components/shared/Bottombar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import RightSidebar from "@/components/shared/RightSidebar"
import Topbar from "@/components/shared/Topbar"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Topbar />

            <div className="flex">
                <LeftSidebar />

                <div className="max-w-4xl mx-auto min-h-screen pt-28 sm:px-10 px-6 md:pb-10 pb-32 flex-1">
                    {children}
                </div>

                <RightSidebar />
            </div>

            <Bottombar />
        </>
    )
}

export default HomeLayout