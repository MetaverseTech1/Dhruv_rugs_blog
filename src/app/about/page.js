import Header from '@/components/Header'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-block glass-accent px-6 py-3 rounded-full">
              <span className="text-[13px] md:text-sm font-bold text-[#8b2635] uppercase tracking-widest">Our Story</span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-[#1a1d29] tracking-tight">
              About Dhruv Flooring
            </h1>
            
            <p className="text-sm md:text-lg text-[#2d3142] max-w-2xl mx-auto">
              Crafting Digital Excellence Since 2024 – Freelancers and content creators partnering with brands to share their stories worldwide
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#8b2635] to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-[#d4a574]"></div>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#8b2635] to-transparent"></div>
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <div className="glass-card rounded-3xl p-12 md:p-16 max-w-5xl mx-auto shadow-xl">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1a1d29] mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-[#2d3142] text-sm md:text-lg leading-relaxed">
                <p>
                  Dhruv flooring was founded in 2024 with the vision of helping businesses, entrepreneurs, and creators amplify their digital presence through engaging blogs and content publishing. We specialize in freelancing services, providing end-to-end solutions for content creation, digital branding, and blog management.
                </p>
                <p>
                  As a company, we are committed to innovation and collaboration. Instead of building everything in-house, we believe in partnering with outstanding brands and individuals who bring real value to their industries. One such collaboration is with Dhruv Rugs International, a reputed manufacturer and exporter of premium handcrafted rugs. Through this partnership, we manage and publish insightful blogs that highlight Dhruv Rugs International excellence in the global carpet industry.
                </p>
                <p>
                  Dhruv flooring is built on the principles of creativity, quality, and consistency. Our mission is to deliver meaningful content that connects businesses with their audience while ensuring professionalism and innovation in every project.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1a1d29] mb-12 text-center">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8b2635] to-[#c1666b] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  💡
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#1a1d29] mb-4">Innovation</h3>
                <p className="text-[#2d3142] leading-relaxed">
                  We believe in fresh ideas and creating impactful content tailored for each brand while staying aligned with the latest digital trends.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#d4a574] to-[#e6c79c] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  ⭐
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#1a1d29] mb-4">Quality Content</h3>
                <p className="text-[#2d3142] leading-relaxed">
                  Our focus is on well-researched, engaging, and authentic storytelling that truly represents our partners and their vision.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8b2635] to-[#d4a574] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#1a1d29] mb-4">Prompt Delivery</h3>
                <p className="text-[#2d3142] leading-relaxed">
                  We value your time and ensure reliable, timely, and professional publishing services.
                </p>
              </div>
            </div>
          </div>

          {/* Global Presence */}
          <div className="glass-card rounded-3xl p-12 mb-16 text-center shadow-xl">
            <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#1a1d29] mb-8">Global Presence</h2>
            <p className="text-sm md:text-lg text-[#2d3142] max-w-4xl mx-auto leading-relaxed">
              We proudly work with independent businesses, startups, and global brands across the world. Our network allows us to bring the latest trends, ideas, and industry stories to readers worldwide.
            </p>
          </div>

          {/* Partnership Contact */}
          <div className="glass-card rounded-3xl p-12 mb-16 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-2xl md:text-4xl font-bold text-[#1a1d29]">Partnership Inquiries</h2>
              <p className="text-[13px] md:text-sm text-[#2d3142] mt-4 uppercase tracking-wider">For partnership inquiries with Dhruv Rugs International brand</p>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="glass rounded-xl p-6 hover:glass-accent transition-all duration-300">
                <p className="text-[#1a1d29] font-semibold mb-2">Name</p>
                <p className="text-[#2d3142] text-[16px] md:text-lg">Dhruv Rugs International</p>
              </div>
              <div className="glass rounded-xl p-6 hover:glass-accent transition-all duration-300">
                <p className="text-[#1a1d29] font-semibold mb-2">Email</p>
                <a href="mailto:info@dhruvrugs.global" className="text-[#8b2635] text-[16px] md:text-lg hover:underline">info@dhruvrugs.global</a>
              </div>
              <div className="glass rounded-xl p-6 hover:glass-accent transition-all duration-300">
                <p className="text-[#1a1d29] font-semibold mb-2">Phone</p>
                <a href="tel:+918318600961" className="text-[#8b2635] text-[16px] md:text-lg hover:underline">+91 8318600961</a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1a1d29] mb-8">Ready to Amplify Your Brand?</h2>
            <p className="max-w-4xl mx-auto text-[16px] md:text-lg text-[#2d3142] leading-relaxed mb-8">
              Let's collaborate to create meaningful content that connects your business with your audience.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8b2635] to-[#c1666b] text-white font-semibold tracking-wider uppercase text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-[#8b2635]/30 hover:-translate-y-1 rounded-lg"
            >
              Get in Touch
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}