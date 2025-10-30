'use client'
import { useState } from 'react'
import Header from '@/components/Header'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construct email body
    const emailSubject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );

    // Redirect to email client
    window.location.href = `mailto:info@dhruvrugs.global?subject=${emailSubject}&body=${body}`;

    // Show success alert and reset form
    setTimeout(() => {
      alert('Thank you for your message! We\'ll be in touch soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 500);
  }

  return (
    <main>
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Drop us a line anytime.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-12 border border-gray-200 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 uppercase tracking-wider">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-900 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-900 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-900 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-900 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 uppercase tracking-wider">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-900 focus:outline-none focus:border-primary-500 transition-colors resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gray-900 text-white font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:bg-primary-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
