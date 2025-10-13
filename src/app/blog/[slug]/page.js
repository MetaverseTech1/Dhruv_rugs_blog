'use client'

import blogData from '@/lib/utils/blogData.json'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function BlogPostPage({ params }) {
  const [imageError, setImageError] = useState(false)
  
  const post = blogData.posts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  // Check if image is an emoji or file path
  const isEmoji = post.image && post.image.length <= 4 && !/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(post.image)
  const hasValidImage = post.image && !imageError && !isEmoji
  const showEmojiIcon = isEmoji || imageError

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
              {/* Featured Image or Emoji */}
              {hasValidImage && !showEmojiIcon ? (
                <div className="relative w-full h-[400px] mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : showEmojiIcon ? (
                <div className="text-6xl mb-6">{isEmoji ? post.image : '🎨'}</div>
              ) : null}
              
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium uppercase tracking-wide mb-4">
                {post.category}
              </span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 text-center mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500 uppercase tracking-wide">
              <span>Posted by Dhruv Team</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none animate-fade-in-up">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
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
  )
}
