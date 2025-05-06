"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"
import { FaPlay, FaCalendarAlt, FaClock, FaStar, FaTicketAlt } from "react-icons/fa"
import { movies } from "../../../data/movies"
import RelatedMovies from "../../../components/related-movies"
import BookingModal from "../../../components/booking-modal"

export default function MovieDetails() {
  const params = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showTrailer, setShowTrailer] = useState(false)
  const [showBooking, setShowBooking] = useState(false)

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const foundMovie = movies.find((m) => m.id === params.id)
    setMovie(foundMovie || movies[0]) // Fallback to first movie if not found
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Movie not found</h1>
        <Link href="/" className="bg-red-600 text-white px-6 py-2 rounded-md">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${movie.coverImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{movie.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white mb-6">
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" /> {movie.rating}/10
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {movie.releaseYear}
              </span>
              <span className="flex items-center gap-1">
                <FaClock /> {movie.duration}
              </span>
              <span className="px-2 py-1 bg-red-600 rounded-md text-sm">{movie.ageRating}</span>
              {movie.genres.map((genre) => (
                <span key={genre} className="px-2 py-1 bg-gray-800 rounded-md text-sm">
                  {genre}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowTrailer(true)}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition"
              >
                <FaPlay /> Watch Trailer
              </button>
              <button
                onClick={() => setShowBooking(true)}
                className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-md transition"
              >
                <FaTicketAlt /> Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
              <p className="text-gray-700 mb-8">{movie.description}</p>

              <h2 className="text-2xl font-bold mb-4">Cast & Crew</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {movie.cast.map((person) => (
                  <div key={person.name} className="bg-gray-100 p-4 rounded-md">
                    <h3 className="font-bold">{person.name}</h3>
                    <p className="text-gray-600 text-sm">as {person.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h2 className="text-xl font-bold mb-4">Movie Info</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Director</span>
                    <span className="font-medium">{movie.director}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Release Date</span>
                    <span className="font-medium">{movie.releaseDate}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{movie.duration}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Genre</span>
                    <span className="font-medium">{movie.genres.join(", ")}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Language</span>
                    <span className="font-medium">{movie.language}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Showtimes</h2>
                <div className="space-y-4">
                  {movie.showtimes.map((showtime, index) => (
                    <div key={index} className="border-b border-gray-300 pb-3 last:border-0">
                      <h3 className="font-bold">{showtime.date}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {showtime.times.map((time) => (
                          <button
                            key={time}
                            onClick={() => setShowBooking(true)}
                            className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200 transition"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <RelatedMovies currentMovieId={movie.id} />
        </div>
      </section>

      {showTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button onClick={() => setShowTrailer(false)} className="absolute -top-10 right-0 text-white text-xl">
              ✕ Close
            </button>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${movie.trailerYoutubeId}`}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      {showBooking && <BookingModal movie={movie} onClose={() => setShowBooking(false)} />}

      <Footer />
    </main>
  )
}
