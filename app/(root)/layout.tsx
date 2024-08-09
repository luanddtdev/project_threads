import Bottombar from "@/components/shared/Bottombar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import RightSidebar from "@/components/shared/RightSidebar"
import Topbar from "@/components/shared/Topbar"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Topbar />

            <div className="flex">
                <LeftSidebar />

                <div className="sm:px-10 px-6 pt-28 md:pb-10 pb-32 min-h-screen flex-1">
                    <div className="max-w-4xl mx-auto">
                        {children}
                    </div>
                </div>

                <RightSidebar />
            </div>

            <Bottombar />
        </div>
    )
}

export default HomeLayout