import SiteHeader from "@/components/site-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const commands = [
  { name: "/help", description: "Show all commands" },
  { name: "/intro", description: "Show app introduction" },
  { name: "/namaste", description: "Greet the CLI" },
  { name: "/project", description: "Show current project info" },
  { name: "/status", description: "Show current status" },
  { name: "/clear", description: "Clear the terminal" },
];

export default function CliDocs() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader cliOpen={false} setCliOpen={() => {}} />
        <div className="container mx-auto p-8">
          <h1 className="text-2xl font-bold mb-6">CLI Commands</h1>
          <div className="bg-white rounded-xl shadow p-6">
            <ul className="divide-y divide-gray-100">
              {commands.map((cmd) => (
                <li key={cmd.name} className="py-4 flex items-center justify-between">
                  <span className="font-mono text-blue-600 text-lg">{cmd.name}</span>
                  <span className="text-gray-700 text-sm">{cmd.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
