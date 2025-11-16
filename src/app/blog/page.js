import BlogCard from '@/components/BlogCard'
import blogData from '@/lib/utils/blogData.json'

export default function BlogPage() {
  return (
    <main className="pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block glass-accent px-6 py-3 rounded-full">
            <span className="text-[13px] md:text-sm font-bold text-[#8b2635] uppercase tracking-widest">Insights & Stories</span>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#1a1d29] tracking-tight">
            Latest Articles
          </h1>
          
          <p className="text-lg md:text-xl text-[#2d3142] max-w-2xl mx-auto leading-relaxed">
            Curated stories and insights from the Dhruv team
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#8b2635] to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#d4a574]"></div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#8b2635] to-transparent"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.posts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post}
              className={`animate-fade-in-up stagger-${Math.min(index + 1, 4)}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}