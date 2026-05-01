"use client";

import blogData from "@/lib/utils/blogData.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BlogPostPage({ params }) {
  const [imageError, setImageError] = useState(false);

  const post = blogData.posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Check if image is an emoji or file path
  const isEmoji =
    post.image &&
    post.image.length <= 4 &&
    !/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(post.image);
  const hasValidImage = post.image && !imageError && !isEmoji;
  const showEmojiIcon = isEmoji || imageError;

  const BLOG_DOMAIN = "https://blog.dhruvrugs.com";
  const shareUrl =
    typeof window !== "undefined"
      ? `${BLOG_DOMAIN}${window.location.pathname}`
      : "";

  const shareTitle = post.title;

  // Share handlers
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "facebook-share-dialog",
      "width=800,height=600"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "linkedin-share-dialog",
      "width=800,height=600"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
      "twitter-share-dialog",
      "width=800,height=600"
    );
  };

  return (
    <main>
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors"
          >
            ← Back to Articles
          </Link>

          {/* Article Header */}
          <header className="mb-12 animate-fade-in-up">
            <div className="text-center mb-8">
              {/* Featured Image or Emoji - FIXED */}
              {hasValidImage && !showEmojiIcon ? (
                <div className="relative w-full h-[400px] mb-6 rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-contain object-center"
                    priority
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : showEmojiIcon ? (
                <div className="text-6xl mb-6">
                  {isEmoji ? post.image : "🎨"}
                </div>
              ) : null}

              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium uppercase tracking-wide mb-4">
                {post.category}
              </span>
            </div>

            <h1 className="font-playfair text-2xl md:text-6xl font-bold text-gray-900 text-center mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex justify-center items-center gap-6 text-[11px] md:text-sm text-gray-500 uppercase tracking-wide">
              <span>Posted by Dhruv Team</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none animate-fade-in-up">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 text-gray-700 max-sm:text-sm leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Section - Centered & Attractive */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <div className="text-center max-w-lg mx-auto">
              <h3 className="text-gray-900 text-2xl font-bold mb-8">
                Share this article
              </h3>
              <div className="flex flex-col gap-4">
                {/* Facebook Share Button */}
                <button
                  onClick={shareOnFacebook}
                  className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#4267B2] to-[#5578c8] hover:from-[#365899] hover:to-[#4267B2] text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    className="w-6 h-6 flex-shrink-0 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
                  </svg>
                  <span className="relative z-10">Share on Facebook</span>
                </button>

                {/* Twitter/X Share Button */}
                <button
                  onClick={shareOnTwitter}
                  className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#1DA1F2] to-[#3db4f7] hover:from-[#1a8cd8] hover:to-[#1DA1F2] text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    className="w-6 h-6 flex-shrink-0 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="relative z-10">Share on Twitter</span>
                </button>

                {/* LinkedIn Share Button */}
                <button
                  onClick={shareOnLinkedIn}
                  className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#0077B5] to-[#0e8fce] hover:from-[#006399] hover:to-[#0077B5] text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    className="w-6 h-6 flex-shrink-0 relative z-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="relative z-10">Share on LinkedIn</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 justify-center">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:bg-primary-500"
            >
              ← More Articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
