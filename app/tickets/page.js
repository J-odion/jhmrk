"use client"

import { useState } from "react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { movies } from "../../data/movies"
import BookingModal from "../../components/booking-modal"
import { FaCalendarAlt, FaClock, FaTicketAlt } from "react-icons/fa"

export default function TicketsPage() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [showBooking, setShowBooking] = useState(false)

  const handleBookTickets = (movie) => {
    setSelectedMovie(movie)
    setShowBooking(true)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">Movie Tickets</h1>

          <div className="grid gap-8">
            {movies.map((movie) => (
              <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/4">
                    <img
                      src={movie.posterImage || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> {movie.releaseYear}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock /> {movie.duration}
                      </span>
                      <span className="px-2 py-1 bg-red-600 text-white rounded-md text-sm">{movie.ageRating}</span>
                      {movie.genres.map((genre) => (
                        <span key={genre} className="px-2 py-1 bg-gray-100 rounded-md text-sm">
                          {genre}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 line-clamp-2">{movie.description}</p>

                    <div className="mb-6">
                      <h3 className="font-bold mb-2">Available Showtimes:</h3>
                      <div className="space-y-4">
                        {movie.showtimes.slice(0, 2).map((showtime, index) => (
                          <div key={index}>
                            <h4 className="font-medium">{showtime.date}</h4>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {showtime.times.map((time) => (
                                <button
                                  key={time}
                                  onClick={() => handleBookTickets(movie)}
                                  className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookTickets(movie)}
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition"
                    >
                      <FaTicketAlt /> Book Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showBooking && selectedMovie && (
        <BookingModal
          movie={selectedMovie}
          onClose={() => {
            setShowBooking(false)
            setSelectedMovie(null)
          }}
        />
      )}

      <Footer />
    </main>
  )
}
