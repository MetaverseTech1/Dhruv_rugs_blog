import Hero from '@/components/Hero'
import BlogCard from '@/components/BlogCard'
import blogData from '@/lib/utils/blogData.json'

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Featured Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Articles
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              Curated stories and insights about rugs, carpets, and interior design
            </p>
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
      </section>
    </main>
  )
}
