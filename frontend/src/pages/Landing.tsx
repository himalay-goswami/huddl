import { PublicHeader } from "@/components/public-header";
import { useCliToggle } from "@/hooks/useCliToggle";
import CliWindow from "@/components/CliWindow";
import Hero from "@/components/Hero";

const Landing: React.FC = () => {
  const { cliOpen, closeCli, toggleCli } = useCliToggle();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-800">
      <PublicHeader />
      <Hero onCliToggle={toggleCli} />
      {cliOpen && (
        <div className="w-full max-w-2xl h-[480px] flex items-start justify-start mx-auto mb-8">
          <CliWindow onExit={closeCli} />
        </div>
      )}
    </div>
  );
};

export default Landing;