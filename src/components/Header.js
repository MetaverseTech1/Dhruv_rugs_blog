// Header.js
'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pathname === '/') {
      setActiveLink('home')
    } else if (pathname.startsWith('/blog')) {
      setActiveLink('blog')
    } else if (pathname === '/about') {
      setActiveLink('about')
    } else if (pathname === '/categories') {
      setActiveLink('categories')
    } else if (pathname === '/contact') {
      setActiveLink('contact')
    }
  }, [pathname])

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'blog', label: 'Articles', href: '/blog' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'categories', label: 'Categories', href: '/categories' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-strong shadow-lg' : 'glass'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4 md:py-6">
        <Link href="/" className="group">
          <span className="text-3xl md:text-4xl font-black text-[#8b2635] group-hover:scale-105 transition-transform inline-block tracking-wide">
            DHRUV
          </span>
        </Link>
        
        <ul className="hidden md:flex gap-12 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`relative text-sm font-semibold tracking-wider transition-all duration-300 uppercase ${
                  activeLink === item.id
                    ? 'text-[#8b2635]'
                    : 'text-[#1a1d29] hover:text-[#8b2635]'
                }`}
                onClick={() => setActiveLink(item.id)}
              >
                {item.label}
                {activeLink === item.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#8b2635] to-[#c1666b]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-3 text-[#1a1d29] hover:text-[#8b2635] transition-colors rounded-lg hover:bg-white/50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-white/40">
          <ul className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`block text-sm font-semibold uppercase tracking-wider py-3 px-4 rounded-lg transition-all ${
                    activeLink === item.id
                      ? 'text-white bg-[#8b2635]'
                      : 'text-[#1a1d29] hover:bg-white/60'
                  }`}
                  onClick={() => {
                    setActiveLink(item.id)
                    setMobileMenuOpen(false)
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
