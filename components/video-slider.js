"use client"

import { useState, useRef, useEffect } from "react"
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa"
import { useLoading } from "./global-loading"


// Sample YouTube video IDs
const videos = [
  { id: "bDBX2vtlaBU", title: "Across The Valley Trailer" },
  { id: "lh8WbsF3010", title: "Behind the Scenes" },
  { id: "w7WPaqc_vqo", title: "Thriller" },
  { id: "i9Xy8ioFzIA", title: "Insight on how the production" },
  {id: "6YwYTaLVWrE", title: "Director and Producer interview"},
  { id: "fPEJfaxtxmg", title: "Road trip to Buruku" },
  { id: "UetXHJ0rMsM", title: "Beautiful art of the night scenes" },
  {id: "UUqDpOHJMzI", title: "Extended Teaser"},
  {id: "VwsDGd4V9uI", title: "bring the Film Business of Lagos state to Benue State"},
  {id: "4CAqAF9S-GA", title: "The first official teaser"},
  {id: "R-1fF9zlBpQ", title: "glimpse of the Tiv Day celebration"},
]

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const sliderRef = useRef(null)
  const { showLoading, hideLoading } = useLoading()

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const openVideo = (video) => {
    // Show loading screen
    showLoading()

    // Set selected video after a short delay to simulate loading
    setTimeout(() => {
      setSelectedVideo(video)
      document.body.style.overflow = "hidden"
      hideLoading()
    }, 1500)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
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
    const currentVideoIndex = videos.findIndex((v) => v.id === selectedVideo.id)
    if (currentVideoIndex < videos.length - 1) {
      // Show loading
      showLoading()

      setTimeout(() => {
        setSelectedVideo(videos[currentVideoIndex + 1])
        hideLoading()
      }, 1000)
    }
  }

  const handleModalPrev = () => {
    const currentVideoIndex = videos.findIndex((v) => v.id === selectedVideo.id)
    if (currentVideoIndex > 0) {
      // Show loading
      showLoading()

      setTimeout(() => {
        setSelectedVideo(videos[currentVideoIndex - 1])
        hideLoading()
      }, 1000)
    }
  }

  return (
    <div className="video-slider">
      <div className="slider-container" ref={sliderRef}>
        {videos.map((video) => (
          <div key={video.id} className="slider-item" onClick={() => openVideo(video)}>
            <img
              src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
              alt={video.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-2 bg-gray-800 text-white">
              <h3 className="text-sm font-medium truncate">{video.title}</h3>
            </div>
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
          disabled={currentIndex >= videos.length - 1}
          className="bg-red-600 text-white p-2 rounded-full disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>

      {selectedVideo && (
        <div className="modal-overlay" onClick={closeVideo}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-button" onClick={closeVideo}>
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
