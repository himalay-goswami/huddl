import { useNavigate } from "react-router-dom";
import HeroCards from "./HeroCards";
import { Button } from "./ui/button";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[500px] py-20 md:py-32 gap-10">
      Left column: Huddl text, description, and buttons
      <div className="flex flex-col justify-center items-center md:items-start px-8 space-y-8">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Huddl
            </span>
          </h1>
          <p className="text-xl font-semibold bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text mb-6">
            Huddl is your personal dev terminal and journal. Track your work, run commands, and search your developer journey—all in one calm, fast, and personal workspace.
          </p>
        </div>
        <div className="flex flex-row gap-4 w-full justify-center md:justify-start">
          <Button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/try")}
          >
            Give it a try!
          </Button>
        </div>
      </div>
      {/* Right column: HeroCards */}
      <div className="flex justify-center items-center">
        <HeroCards />
      </div>
    </section>
  );
};

export default Hero;
