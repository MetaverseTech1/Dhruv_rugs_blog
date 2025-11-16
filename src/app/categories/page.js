import Link from 'next/link'
import blogData from '@/lib/utils/blogData.json'

export default function CategoriesPage() {
  // Calculate post count for each category
  const categoriesWithCount = blogData.categories.map(category => ({
    ...category,
    count: blogData.posts.filter(post => post.category === category.name).length
  }))

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Browse Categories
          </h1>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of articles organized by topic to find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoriesWithCount.map((category, index) => (
            <div 
              key={category.name}
              className={`bg-white border border-gray-200 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group animate-fade-in-up stagger-${Math.min(index + 1, 4)}`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-500 transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {category.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                  {category.count} Article{category.count !== 1 ? 's' : ''}
                </span>
                {category.count > 0 && (
                  <Link 
                    href={`/blog?category=${encodeURIComponent(category.name)}`}
                    className="text-primary-500 font-medium text-sm hover:text-primary-600 transition-colors"
                  >
                    View →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}