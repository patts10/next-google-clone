import { SearchHeader } from "@/components"

import '../globals.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function layout({children}: LayoutProps) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  )
}
