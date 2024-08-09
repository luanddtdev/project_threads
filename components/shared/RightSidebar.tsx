const RightSidebar = () => {
  return (
    <div className="sticky top-0 right-0 z-20 w-fit h-screen px-10 pt-28 pb-6 bg-color-1 border-l border-l-color-2 overflow-auto custom-scrollbar xl:flex hidden flex-col gap-12">
      <div className="flex-1">
        <h3 className="h3-20-medium text-white capitalize">
          Suggested Communities
        </h3>
      </div>

      <div className="flex-1">
        <h3 className="h3-20-medium text-white capitalize">
          Suggested Users
        </h3>
      </div>
    </div>
  )
}

export default RightSidebar