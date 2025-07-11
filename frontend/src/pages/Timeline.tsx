import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Post {
  id: string;
  user: string;
  content: string;
  timestamp: string;
}

const Timeline: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    // Simulated API call for posts
    const fetchPosts = async () => {
      const mockPosts: Post[] = [
        { id: '1', user: 'dev1', content: 'Just shipped my first PR! 🚀', timestamp: '2025-07-11T10:00:00Z' },
        { id: '2', user: 'dev2', content: 'Debugging is my cardio 💪', timestamp: '2025-07-11T09:30:00Z' },
      ];
      setPosts(mockPosts);
    };
    fetchPosts();
  }, []);

  const handlePost = () => {
    if (!newPost.trim()) {
      return;
    }
    const post: Post = {
      id: Math.random().toString(),
      user: 'currentUser',
      content: newPost,
      timestamp: new Date().toISOString(),
    };
    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Create a Post</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Input
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            className="flex-1"
          />
          <Button onClick={handlePost}>Post</Button>
        </CardContent>
      </Card>
      <ScrollArea className="h-[600px]">
        {posts.map((post) => (
          <Card key={post.id} className="mb-4">
            <CardContent className="flex gap-4 pt-4">
              <Avatar>
                <AvatarImage src={`https://avatar.vercel.sh/${post.user}`} />
                <AvatarFallback>{post.user[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.user}</p>
                <p className="text-sm text-muted-foreground">{new Date(post.timestamp).toLocaleString()}</p>
                <p className="mt-2">{post.content}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Timeline;
