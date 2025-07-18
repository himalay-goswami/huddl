import React from "react";
import type { Post } from "@/pages/Timeline";
import { MessageCircle, Rocket, Bookmark } from "lucide-react";
import { InfoDisplay } from "./ui/InfoBanner";

const PostComponent: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="rounded-xl shadow-lg border border-gray-200 bg-white mb-4 mx-2 p-0 flex flex-col" style={{ minWidth: 0 }}>
      {/* Layer 1: InfoDisplay and timestamp */}
      <div className="flex items-start justify-between px-4 py-3" style={{ flexBasis: '30%' }}>
        <InfoDisplay user={post.user} />
        <time className="text-xs text-muted-foreground whitespace-nowrap">{new Date(post.timestamp).toLocaleString()}</time>
      </div>
      {/* Layer 2: Content */}
      <div className="px-4 pb-2 text-start" style={{ flexBasis: '50%' }}>
        <p className="text-md text-gray-800 break-words text-left" style={{ maxWidth: '100%' }}>
          {post.content.length > 140 ? post.content.slice(0, 137) + '...' : post.content}
        </p>
      </div>
      {/* Layer 3: Actions */}
      <div className="flex justify-end items-center gap-4 px-4 py-2 border-t border-gray-100 bg-gray-50" style={{ flexBasis: '20%' }}>
        <MessageCircle className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer transition" />
        <Rocket className="w-5 h-5 text-gray-500 hover:text-green-500 cursor-pointer transition" />
        <Bookmark className="w-5 h-5 text-gray-500 hover:text-yellow-500 cursor-pointer transition" />
      </div>
    </div>
  );
};

export default PostComponent;
