import React, { useState, useEffect } from "react";
import Post from "@/components/Post";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NewPost from "@/components/NewPost";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import SiteHeader from "@/components/site-header";
import CliWindow from "@/components/CliWindow";
import { Calendar, Github, Smile } from "lucide-react";

export interface Post {
  id: string;
  user: string;
  content: string;
  timestamp: string;
}

const Timeline: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [cliOpen, setCliOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const mockPosts: Post[] = [
        {
          id: "1",
          user: "dev1",
          content: "Just shipped my first PR! 🚀",
          timestamp: "2025-07-11T10:00:00Z",
        },
        {
          id: "2",
          user: "dev2",
          content: "Debugging is my cardio 💪",
          timestamp: "2025-07-11T09:30:00Z",
        },
      ];
      setPosts(mockPosts);
    };
    fetchPosts();
  }, []);

  const handleCreatePost = (content: string) => {
    const post: Post = {
      id: Math.random().toString(),
      user: "currentUser",
      content,
      timestamp: new Date().toISOString(),
    };
    setPosts([post, ...posts]);
  };

  return (
    <>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader cliOpen={cliOpen} setCliOpen={setCliOpen} />
          {cliOpen && <CliWindow onExit={() => setCliOpen(false)} />}
          <div className="container mx-auto p-4 flex gap-4 overflow-hidden h-[calc(100vh-var(--header-height))]">
            <div className="w-3/5 flex flex-col">
              <Card className="flex flex-col flex-1">
                <CardHeader
                  className="flex justify-between items-center cursor-pointer select-none"
                >
                  <CardTitle>Your day</CardTitle>
                </CardHeader>
                <CardContent>
                  <NewPost onCreate={handleCreatePost} />
                </CardContent>
                <ScrollArea className="flex-1">
                  {posts.length === 0 ? (
                    <p className="p-4 text-center text-muted-foreground">No activity yet.</p>
                  ) : (
                    posts.map((post) => (
                      <Post key={post.id} post={post} />
                    ))
                  )}
                </ScrollArea>
              </Card>
            </div>
            <div className="w-2/5 flex flex-col gap-4">
              <Card>
                <CardHeader className="flex items-center gap-2">
                  <Smile size={20} />
                  <CardTitle>Mood Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Track your mood and stay motivated.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-2">
                  <Github size={20} />
                  <CardTitle>GitHub Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">View your latest commits and PRs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-2">
                  <Calendar size={20} />
                  <CardTitle>Today's Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Upcoming meetings and deadlines.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Timeline;
