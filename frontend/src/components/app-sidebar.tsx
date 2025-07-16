import logo from "@/assets/logo.jpg";
import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      category: "Workspace",
      items: [
        { title: "Timeline", url: "/timeline", icon: IconChartBar },
        { title: "Journal", url: "/journal", icon: IconFileDescription },
        { title: "Posts", url: "/posts", icon: IconFileAi },
        { title: "Meetings", url: "/meetings", icon: IconUsers },
        { title: "Tickets", url: "/tickets", icon: IconListDetails },
        { title: "Pull Requests", url: "/pull-requests", icon: IconReport },
      ],
    },
    {
      category: "Knowledge",
      items: [
        { title: "Data Library", url: "/library", icon: IconDatabase },
        { title: "Reports", url: "/reports", icon: IconReport },
        { title: "Prompts", url: "/prompts", icon: IconFileAi },
      ],
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-4 py-6">
          <img src={logo} alt="Huddl Logo" className="h-10 w-10 object-contain rounded" />
          <span className="text-2xl font-bold">Huddl</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <div key={group.category} className="mb-4">
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {group.category}
            </div>
            <NavMain items={group.items} />
          </div>
        ))}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
