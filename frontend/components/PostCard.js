"use client";
import { useState } from "react";

export default function PostCard({ post }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="backdrop-blur-sm bg-dark-card border border-gray-700/30 rounded-xl p-6 hover:bg-dark-light/80 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-purple-500"></div>
        <div className="ml-4">
          <h3 className="font-medium text-gray-200">
            {post.userName || `User ${post.userid}`}
          </h3>
          <p className="text-sm text-gray-400">{post.commentCount} comments</p>
        </div>
      </div>
      <p className="text-gray-300">{post.content}</p>

      <div className="mt-4 flex items-center space-x-2">
        <button
          onClick={() => setShowComments(true)}
          className="flex items-center space-x-2 text-gray-400 hover:text-accent transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          <span>{post.commentCount} comments</span>
        </button>
      </div>

      {showComments && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setShowComments(false)}
        >
          <div
            className="bg-dark-card/95 max-w-lg w-full m-4 rounded-2xl border border-gray-700/30 shadow-xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-700/30">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Comments ({post.commentCount})
              </h3>
              <button
                onClick={() => setShowComments(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
              {post.comments?.map((comment) => (
                <div
                  key={comment.id}
                  className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all"
                >
                  <p className="text-gray-300">{comment.content}</p>
                </div>
              )) || (
                <div className="text-center py-8">
                  <p className="text-gray-400">No comments yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
