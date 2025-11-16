import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#d4a574]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#8b2635]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="glass-accent px-6 py-3 rounded-full text-[13px] md:text-sm font-bold text-[#8b2635] uppercase tracking-widest">
              Premium Handcrafted Rugs
            </span>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-[#1a1d29]">
            Rugs that{' '}
            <br/>
            <span className="relative inline-block">
              <span className="text-[#8b2635]">inspire</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C102 4 202 4 298 10" stroke="#d4a574" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
            .
          </h1>
          
          <p className="text-lg md:text-2xl text-[#2d3142] leading-relaxed max-w-xl">
            Discover the artistry of premium rugs and carpets. Expert insights, care tips, 
            and design inspiration for transforming your space.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8b2635] to-[#c1666b] text-white font-semibold tracking-wider uppercase text-[13px] md:text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-[#8b2635]/30 hover:-translate-y-1 rounded-lg"
            >
              Explore Articles
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 glass-strong text-[#1a1d29] font-semibold tracking-wider uppercase text-[13px] md:text-sm transition-all duration-300 hover:glass-accent hover:-translate-y-1 rounded-lg border border-[#1a1d29]/10"
            >
              About Us
            </Link>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="glass-card rounded-3xl p-12 shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b2635] to-[#c1666b] flex items-center justify-center text-2xl shadow-lg">
                  🎨
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1d29] text-lg">Artisan Crafted</h3>
                  <p className="text-[#2d3142] text-sm">Handwoven Masterpieces</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4a574] to-[#e6c79c] flex items-center justify-center text-2xl shadow-lg">
                  ✨
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1d29] text-lg">Premium Quality</h3>
                  <p className="text-[#2d3142] text-sm">Natural Materials</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b2635] to-[#d4a574] flex items-center justify-center text-2xl shadow-lg">
                  🌍
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1d29] text-lg">Global Reach</h3>
                  <p className="text-[#2d3142] text-sm">Worldwide Delivery</p>
                </div>
              </div>
            </div>
            
            {/* <div className="mt-8 pt-8 border-t border-[#1a1d29]/10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2d3142]">Trusted by</span>
                <span className="text-2xl font-bold text-[#8b2635]">500+</span>
              </div>
              <p className="text-xs text-[#2d3142] mt-1">Global Customers</p>
            </div> */}
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#d4a574] to-[#e6c79c] rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>
    </section>
  )
}