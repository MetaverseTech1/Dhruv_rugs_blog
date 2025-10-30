'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function BlogCard({ post, className = '' }) {
  const [imageError, setImageError] = useState(false)
  
  // Check if image is an emoji (single character or emoji pattern)
  const isEmoji = post.image && post.image.length <= 4 && !/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(post.image)
  
  // Determine if we should show image section
  const hasValidImage = post.image && !imageError && !isEmoji
  const showEmojiIcon = isEmoji || imageError

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b2635] via-[#c1666b] to-[#d4a574] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md"></div>
        
        <div className="relative glass-card h-full min-h-[480px] flex flex-col rounded-2xl">
          {/* Image Section - Only show if there's a valid image or emoji */}
          {(hasValidImage || showEmojiIcon) && (
            <div className="relative h-64 w-full overflow-hidden rounded-t-2xl bg-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b2635]/10 via-[#c1666b]/10 to-[#d4a574]/10 group-hover:scale-110 transition-transform duration-700 z-10 pointer-events-none"></div>
              
              {/* Display actual image - FIXED */}
              {hasValidImage && !showEmojiIcon && (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  onError={() => setImageError(true)}
                  priority={false}
                />
              )}
              
              {/* Display emoji icon as fallback */}
              {showEmojiIcon && (
                <div className="absolute inset-0 flex items-center justify-center text-7xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg z-20">
                  {isEmoji ? post.image : '🎨'}
                </div>
              )}
              
              <div className="absolute top-4 right-4 z-20">
                <span className="glass-accent px-4 py-2 rounded-full text-xs font-bold text-[#8b2635] uppercase tracking-widest shadow-lg">
                  {post.category}
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
            </div>
          )}
          
          {/* Content Section */}
          <div className={`p-8 flex-1 flex flex-col ${!hasValidImage && !showEmojiIcon ? 'pt-12' : ''}`}>
            {/* Category badge for no-image layout */}
            {!hasValidImage && !showEmojiIcon && (
              <div className="mb-4">
                <span className="glass-accent px-4 py-2 rounded-full text-xs font-bold text-[#8b2635] uppercase tracking-widest shadow-lg">
                  {post.category}
                </span>
              </div>
            )}
            
            <div className="w-12 h-1 bg-gradient-to-r from-[#8b2635] to-[#d4a574] rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
            
            <h3 className="font-playfair text-2xl font-bold mb-4 text-[#1a1d29] leading-tight group-hover:text-[#8b2635] transition-colors duration-300">
              {post.title}
            </h3>
            
            <p className="text-[#2d3142] leading-relaxed mb-6 flex-1">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t border-[#1a1d29]/10">
              <div className="flex items-center gap-2 text-sm text-[#2d3142]/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center gap-2 text-[#8b2635] font-bold text-sm group-hover:gap-3 transition-all duration-300">
                <span>Read</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            
            {/* Read time badge - adjust position based on image presence */}
            {(hasValidImage || showEmojiIcon) && (
              <div className="absolute top-[240px] right-6 glass px-3 py-1.5 rounded-full shadow-md z-20">
                <span className="text-xs text-[#1a1d29] font-semibold">{post.readTime}</span>
              </div>
            )}
            
            {/* Read time badge for no-image layout */}
            {!hasValidImage && !showEmojiIcon && (
              <div className="absolute top-6 right-6 glass px-3 py-1.5 rounded-full shadow-md">
                <span className="text-xs text-[#1a1d29] font-semibold">{post.readTime}</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
