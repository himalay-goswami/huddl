import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NewPostProps {
  onCreate: (content: string) => void;
}

const MAX_CHARS = 140;

const getCharCountColor = (count: number) => {
  if (count > MAX_CHARS * 0.9) return "bg-red-500";
  if (count > MAX_CHARS * 0.7) return "bg-yellow-400";
  return "bg-green-500";
};

const NewPost: React.FC<NewPostProps> = ({ onCreate }) => {
  const [newPost, setNewPost] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handlePost = () => {
    if (!newPost.trim()) return;
    onCreate(newPost);
    setNewPost("");
    setExpanded(false);
  };

  return (
    <div
      className={`mb-4 transition-all duration-200 ${
        expanded ? "border rounded-xl shadow-md p-4 bg-white" : ""
      }`}
    >
      {!expanded ? (
        <Input
          value={newPost}
          onFocus={() => setExpanded(true)}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full"
        />
      ) : (
        <>
          <div className="relative">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
              rows={4}
              className="w-full resize-none rounded-lg border border-gray-200 p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-md"
              autoFocus
              maxLength={MAX_CHARS + 5}
            />
            <div className="flex justify-end mb-2">
              <div className="w-32 h-2 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-200 ${getCharCountColor(newPost.length)}`}
                  style={{ width: `${Math.min((newPost.length / MAX_CHARS) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                Tag Project
              </Button>
              <Button variant="ghost" size="sm">
                Attach File
              </Button>
              <Button variant="ghost" size="sm">
                Add Mood
              </Button>
            </div>

            <div className="flex gap-2 items-right">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setExpanded(false)}
              >
                Cancel
              </Button>
              <Button onClick={handlePost} size="sm">
                Post
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewPost;
