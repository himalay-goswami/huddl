import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type SiteHeaderProps = {
  cliOpen: boolean;
  setCliOpen: (open: boolean) => void;
};

export default function SiteHeader({ cliOpen, setCliOpen }: SiteHeaderProps) {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-sm border-b">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-1" />
      </div>
      <div className="flex items-center gap-4">
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
        <Button
          variant={cliOpen ? "secondary" : "outline"}
          size="sm"
          onClick={() => setCliOpen(!cliOpen)}
        >
          {cliOpen ? "Close CLI" : "Open CLI"}
        </Button>
      </div>
    </header>
  );
}
