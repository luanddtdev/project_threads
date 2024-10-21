const RightSidebar = () => {
  return (
    <div className="sticky top-0 right-0 z-20 w-fit h-screen pt-28 px-10 pb-6 bg-color-1 border-l border-l-color-2 xl:flex hidden flex-col gap-12">
      <div className="flex-1">
        <h3 className="text-20-medium text-white">
          Suggested Communities
        </h3>
      </div>

      <div className="flex-1">
        <h3 className="text-20-medium text-white">
          Suggested Users
        </h3>
      </div>
    </div>
  )
}

export default RightSidebar