"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa"
import { movies } from "../data/movies"

export default function RelatedMovies({ currentMovieId }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  // Filter out the current movie and get 6 related movies
  const relatedMovies = movies.filter((movie) => movie.id !== currentMovieId).slice(0, 6)

  const handleNext = () => {
    if (currentIndex < relatedMovies.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  useEffect(() => {
    if (sliderRef.current) {
      const translateX = -currentIndex * 320 // Width of each item + gap
      sliderRef.current.style.transform = `translateX(${translateX}px)`
    }
  }, [currentIndex])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out gap-6" ref={sliderRef}>
          {relatedMovies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-72">
              <Link href={`/movies/${movie.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={movie.posterImage || "/placeholder.svg"}
                    alt={movie.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 truncate">{movie.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span>{movie.rating}/10</span>
                      <span className="mx-2">•</span>
                      <span>{movie.releaseYear}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {movie.genres.slice(0, 2).map((genre) => (
                        <span key={genre} className="px-2 py-1 bg-gray-100 text-xs rounded">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {relatedMovies.length > 1 && (
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-red-600 text-white p-2 rounded-full disabled:opacity-50"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= relatedMovies.length - 1}
            className="bg-red-600 text-white p-2 rounded-full disabled:opacity-50"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  )
}
