import { Outlet } from "@tanstack/react-router"
import { ReactNode } from "react"

interface LayoutBodyProps {
  children?: ReactNode
}

const LayoutBody = ({ children }: LayoutBodyProps) => {
  return (
    <div className="flex font-poppins items-center justify-center">
      <div className="h-screen w-screen dark:bg-gray-900">
        {children}
        {/* <Outlet /> */}
      </div>
    </div>
  )
}

export default LayoutBody