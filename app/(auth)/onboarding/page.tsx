import AccountProfile from "@/components/forms/AccountProfile"

const Onboarding = () => {
    return (
        <div className="max-w-3xl mx-auto px-10 py-20">
            <h1 className="text-30-bold text-white">
                Onboarding
            </h1>

            <p className="mt-3 text-16-normal text-color-4">
                Complete your profile now to use Threads
            </p>

            <div className="mt-9 p-10 bg-color-1">
                <AccountProfile />
            </div>
        </div>
    )
}

export default Onboarding