"use client"

import { useState, useRef, useEffect } from "react"
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa"
import { useLoading } from "./global-loading"

// Sample images
const images = [
  { id: 1, src: "/1.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 2, src: "/2.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 3, src: "/3.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 4, src: "/4.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 5, src: "/5.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 6, src: "/6.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 7, src: "/7.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 8, src: "/8.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 9, src: "/9.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 10, src: "/10.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 11, src: "/11.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 12, src: "/12.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 13, src: "/13.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 14, src: "/14.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 15, src: "/15.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 16, src: "/16.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 17, src: "/17.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 18, src: "/18.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 19, src: "/19.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 20, src: "/20.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 21, src: "/21.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 22, src: "/22.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 23, src: "/23.jpeg?height=400&width=600", alt: "Movie Scene 1" },
  { id: 24, src: "/24.jpeg?height=400&width=600", alt: "Movie Scene 1" },
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const sliderRef = useRef(null)
  const { showLoading, hideLoading } = useLoading()

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const openImage = (image) => {
    // Show loading screen
    showLoading()

    // Set selected image after a short delay to simulate loading
    setTimeout(() => {
      setSelectedImage(image)
      document.body.style.overflow = "hidden"
      hideLoading()
    }, 1500)
  }

  const closeImage = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    if (sliderRef.current) {
      const translateX = -currentIndex * 320 // Width of each item + gap
      sliderRef.current.style.transform = `translateX(${translateX}px)`
    }
  }, [currentIndex])

  // Handle modal navigation
  const handleModalNext = () => {
    const currentImageIndex = images.findIndex((img) => img.id === selectedImage.id)
    if (currentImageIndex < images.length - 1) {
      // Show loading
      showLoading()

      setTimeout(() => {
        setSelectedImage(images[currentImageIndex + 1])
        hideLoading()
      }, 1000)
    }
  }

  const handleModalPrev = () => {
    const currentImageIndex = images.findIndex((img) => img.id === selectedImage.id)
    if (currentImageIndex > 0) {
      // Show loading
      showLoading()

      setTimeout(() => {
        setSelectedImage(images[currentImageIndex - 1])
        hideLoading()
      }, 1000)
    }
  }

  return (
    <div className="image-slider">
      <div className="slider-container" ref={sliderRef}>
        {images.map((image) => (
          <div key={image.id} className="slider-item" onClick={() => openImage(image)}>
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-red-600 text-white p-2 rounded-full disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= images.length - 1}
          className="bg-red-600 text-white p-2 rounded-full disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.alt} />
            <button className="close-button" onClick={closeImage}>
              <FaTimes />
            </button>
            <div className="modal-controls">
              <button onClick={handleModalPrev}>
                <FaArrowLeft />
              </button>
              <button onClick={handleModalNext}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
