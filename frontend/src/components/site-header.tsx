import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

const statusOptions = [
  { label: "Available", emoji: "🟢" },
  { label: "Busy", emoji: "🔴" },
  { label: "In a meeting", emoji: "📅" },
  { label: "Focusing", emoji: "🚀" },
  { label: "On break", emoji: "☕" },
  { label: "Reviewing PRs", emoji: "👀" },
]

export function SiteHeader() {
  const [status, setStatus] = useState(statusOptions[0])

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Good Morning, User</h1>
        <div className="ml-auto flex items-center gap-2">
          <Badge variant="outline" className="cursor-pointer">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span>{status.emoji} {status.label}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {statusOptions.map((option) => (
                  <DropdownMenuItem key={option.label} onClick={() => setStatus(option)}>
                    {option.emoji} {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" size="sm">
                Create
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>New Microblog Post</DropdownMenuItem>
              <DropdownMenuItem>New Timeline Event</DropdownMenuItem>
              <DropdownMenuItem>Set Status / Mood</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
