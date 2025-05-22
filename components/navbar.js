"use client"

import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { useLoading } from "./global-loading"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { showLoading, hideLoading } = useLoading()

  const handleNavClick = (sectionId) => {
    // Close mobile menu if open
    setIsMenuOpen(false)

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
    <nav className="navbar text-white py-4 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("home")
          }}
        >
          Across The Valley
        </a>

        <div className="hidden md:flex space-x-8">
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
          <a
            href="#cast"
            className="hover:text-red-500 transition"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("cast")
            }}
          >
            Cast & Crew
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-16 left-0 right-0 p-4 z-50">
          <div className="flex flex-col space-y-4">
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
            <a
              href="#cast"
              className="hover:text-red-500 transition"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("cast")
              }}
            >
              Cast & Crew
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
