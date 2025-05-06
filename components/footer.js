"use client"

import Link from "next/link"
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { useLoading } from "./global-loading"

export default function Footer() {
  const { showLoading, hideLoading } = useLoading()

  const handleNavClick = (sectionId) => {
    // Show loading screen
    showLoading()

    // Scroll to section after a short delay
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }

      // Hide loading after scrolling (add a small delay for effect)
      setTimeout(() => {
        hideLoading()
      }, 500)
    }, 1000)
  }

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Across The Valley</h3>
            <p className="mb-4">A love thriller movie set in Benue state, Nigeria.</p>
            <div className="social-icons">
              <Link href="https://www.facebook.com/profile.php?id=61567388660668" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/acrossthe_valley?igsh=MXFvd3E1ZW05ZW8wbQ=="
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link href="https://www.youtube.com/@johnmarkiyoo9310" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-x-2 flex ">
              <li>
                <a
                  href="#home"
                  className="hover:text-red-500 transition"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick("home")
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-red-500 transition"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick("about")
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  className="hover:text-red-500 transition"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick("videos")
                  }}
                >
                  Videos
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-red-500 transition"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick("gallery")
                  }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#cast"
                  className="hover:text-red-500 transition"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick("cast")
                  }}
                >
                  Cast
                </a>
              </li>
              <li>
                <a
                  href="#crew"
                  className="hover:text-red-500 transition"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick("crew")
                  }}
                >
                  Crew
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-red-500" />
                <span>123 Movie Street, Makurdi, Benue State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-red-500" />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" />
                <span>info@acrossthevalley.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Across The Valley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
