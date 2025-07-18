import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const InfoDisplay: React.FC<{ user: string }> = ({ user }) => (
  <div className="flex items-center gap-3">
    <Avatar className="w-10 h-10">
      <AvatarImage src={`https://avatar.vercel.sh/${user}`} />
      <AvatarFallback>{user[0].toUpperCase()}</AvatarFallback>
    </Avatar>
    <div className="flex flex-col items-start min-w-0">
      <span className="font-semibold text-base truncate text-left">{user}</span>
      <span className="text-xs text-muted-foreground truncate text-left">Working on: <span className="italic text-gray-500">#project</span></span>
    </div>
  </div>
);