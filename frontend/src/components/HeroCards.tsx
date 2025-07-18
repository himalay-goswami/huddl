import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
// import { LightBulbIcon } from "@/components/ui/icons/light-bulb-icon";
import { Lightbulb } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LightBulbIcon } from "./Icons";

const teamMember = {
  name: "Himalay Goswami",
  username: "@himalaygoswami",
  avatar: "https://github.com/himalay-goswami.png",
  role: "Founder & Developer",
  github: "https://github.com/himalay-goswami",
  linkedin: "https://www.linkedin.com/in/himalaygoswami/",
};

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src={teamMember.avatar} />
            <AvatarFallback>HG</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">{teamMember.name}</CardTitle>
            <CardDescription>{teamMember.username}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>This tool is built for nerds!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[120px] top-12 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src={teamMember.avatar}
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">{teamMember.name}</CardTitle>
          <CardDescription className="font-normal text-primary">
            {teamMember.role}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2">
          <p>
            Track your work, run commands, and search your developer journey—all in one calm, fast, and personal workspace.
          </p>
        </CardContent>
        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href={teamMember.github}
              target="_blank"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href={teamMember.linkedin}
              target="_blank"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Free
            <Badge variant="secondary" className="text-sm text-primary">
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>
          <CardDescription>
            All features for individuals. No credit card required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>
        <hr className="w-4/5 m-auto mb-4" />
        <CardFooter className="flex">
          <div className="space-y-4">
            {["4 Team members", "4 GB Storage", "Upto 6 pages"].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" /> <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] left-[320px] bottom-[60px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="flex gap-2">
            <Lightbulb />
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className="text-md mt-2">
              Switch between light and dark themes for your workspace.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default HeroCards;
