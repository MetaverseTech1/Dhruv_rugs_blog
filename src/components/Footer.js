// Footer.js
import Link from 'next/link'
import blogData from '@/lib/utils/blogData.json'

export default function Footer() {
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'Articles', href: '/blog' },
    { label: 'Categories', href: '/categories' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const categoryLinks = blogData.categories.map(category => ({
    label: category.name,
    href: `/blog?category=${encodeURIComponent(category.name)}`
  }))

  return (
    <footer className="glass-dark text-white py-16 relative overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8b2635] via-[#d4a574] to-[#8b2635]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl md:text-4xl font-black text-[#d4a574] hover:scale-105 transition-transform inline-block tracking-wide">
                DHRUV
              </span>
            </Link>
            <p className="text-white/80 max-sm:text-[13px] leading-relaxed mb-6">
              Discover the artistry of premium rugs and carpets. Expert insights, care tips, 
              and design inspiration for transforming your space.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3 max-sm:text-[13px]">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-[#d4a574] hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#d4a574] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6 text-white">Categories</h3>
            <ul className="space-y-3 max-sm:text-[13px]">
              {categoryLinks.slice(0, 6).map((category) => (
                <li key={category.label}>
                  <Link 
                    href={category.href}
                    className="text-white/70 hover:text-[#d4a574] hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#d4a574] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4 max-sm:text-[13px]">
              <div className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group">
                <span className="text-[#d4a574] text-xl mt-0.5">📧</span>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@dhruvrugs.global" className="text-sm hover:text-[#d4a574] transition-colors">
                    info@dhruvrugs.global
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Dhruv Rugs International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
