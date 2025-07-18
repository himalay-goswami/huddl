import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type SiteHeaderProps = {
  cliOpen: boolean;
  setCliOpen: (open: boolean) => void;
};

export default function SiteHeader({ cliOpen, setCliOpen }: SiteHeaderProps) {
  
  const navigate = useNavigate();
  return (
    <header className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-sm border-b">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-1" />
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="default"
          size="sm"
          onClick={() => navigate("/cli-docs")}
        >
          CLI Docs
        </Button>
        <Button
          variant={cliOpen ? "secondary" : "default"}
          size="sm"
          onClick={() => setCliOpen(!cliOpen)}
        >
          {cliOpen ? "Close CLI" : "Open CLI"}
        </Button>
      </div>
    </header>
  );
}
