"use client"

import type React from "react"
import { FileText, MessageCircle, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Portfolio() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    purpose: "",
    message: "",
  })

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/ResumeVivek.pdf"
    link.download = "ResumeVivek.pdf"
    link.click()
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-mono">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Right Side Social Links */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-8 z-10">
        <Link
          href="/about"
          className="text-lg font-medium text-gray-700 tracking-wider hover:text-gray-800 hover:font-bold transition-all cursor-pointer"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          ABOUT
        </Link>
        <Link
         
          href="https://www.linkedin.com/in/vivekdhiman2963/?originalSubdomain=in"
          
          className="text-lg font-medium text-gray-600 tracking-wider hover:text-gray-800 hover:font-bold transition-all cursor-pointer"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          LINKEDIN
        </Link>
        <Link
          href="/projects"
          className="text-lg font-medium text-gray-600 tracking-wider hover:text-gray-800 hover:font-bold transition-all cursor-pointer"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          PROJECTS
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-gray-600 mb-4 font-normal">
                Hello web cowboy,
              </h2>
              <h1 className="text-6xl lg:text-8xl font-bold text-black leading-none">
                I'm Vivek
                <span className="text-blue-500 text-5xl lg:text-7xl">*</span>
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-gray-600 text-lg leading-relaxed">
                Hello! I'm a backend engineer. I'm constantly learning and
                coding to build efficient, reliable systems behind the scenes.
                For me, turning passion into a profession isn’t just rewarding —
                it’s what drives me every day.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 lg:pt-64">
            <div className="space-y-6">
              <div
                onClick={handleDownloadResume}
                className="flex items-center space-x-4 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
              >
                <FileText className="w-6 h-6" />
                <span className="text-lg">If you want my resume**</span>
              </div>
              <div
                onClick={() => setShowContactForm(true)}
                className="flex items-center space-x-4 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg">Or have chat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-20 space-y-2 text-sm text-gray-500 max-w-md">
          <p>
            <span className="text-blue-600">*</span> A very passionate and
            competent person open to freelance offers and internship.
          </p>
          <p>
            <span className="text-blue-600">**</span> If you want my folio, ask
            me, I don't bite.
          </p>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Let's have a chat
            </h3>

            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              />
              <input
                type="text"
                name="purpose"
                placeholder="your purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              />
              <textarea
                name="message"
                placeholder="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono resize-none"
              />
              <button
                type="button"
                onClick={() => {
                  const { email, purpose, message } = formData
                  const phoneNumber = "8295599448"
                  const fullMessage = `New Message from website:\nEmail: ${email}\nPurpose: ${purpose}\nMessage: ${message}`
                  const encodedMessage = encodeURIComponent(fullMessage)
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
                  window.open(whatsappUrl, "_blank")

                  setShowContactForm(false)
                  setShowThankYou(true)
                  setTimeout(() => {
                    setShowThankYou(false)
                  }, 3000)
                }}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors font-mono"
              >
                send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Thank you for contacting
            </h3>
            <p className="text-gray-600 font-mono">
              I'll get back to you soon!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
