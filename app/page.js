"use client"
import { useState, useEffect } from "react"
import Navbar from "../components/navbar"
import VideoSlider from "../components/video-slider"
import ImageSlider from "../components/image-slider"
import CastList from "../components/cast-list"
import CrewList from "../components/crew-list"
import Footer from "../components/footer"
import AboutMovie from "../components/about-movie"
import LoadingScreen from "../components/loading-screen"
import MovieDetails from "../components/movie-details"
import { useLoading } from "../components/global-loading"

export default function Home() {
  const [initialLoading, setInitialLoading] = useState(true)
  const { showLoading, hideLoading } = useLoading()

  // Initial loading for a few minutes (3 minutes = 180000ms)
  useEffect(() => {
    // Show loading for 3 minutes or until page is fully loaded
    const timer = setTimeout(() => {
      setInitialLoading(false)
    }, 1800) // 3 minutes

    // Alternative: Hide loading when page is fully loaded
    window.addEventListener("load", () => {
      setInitialLoading(false)
    })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("load", () => {
        setInitialLoading(false)
      })
    }
  }, [])

  return (
    // <main className="min-h-screen">
    <main className="h-screen overflow-y-hidden">
      {initialLoading && <LoadingScreen />}

      <Navbar />

      <section
        id="home"
        className="hero-section"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <h1 className="text-5xl font-bold mb-4">Across The Valley</h1>
          <p className="text-xl mb-8">A love thriller that will be hitting your screens soon</p>
        </div>
      </section>

      <section id="details" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold section-title">Movie Details</h2>
          <MovieDetails />
        </div>
      </section>

      <section id="about" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold section-title">About The Movie</h2>
          <AboutMovie />
        </div>
      </section>

      <section id="videos" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold section-title">Videos</h2>
          <VideoSlider />
        </div>
      </section>

      <section id="gallery" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold section-title">Gallery</h2>
          <ImageSlider />
        </div>
      </section>

      <section id="cast" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold section-title">Cast</h2>
          <CastList />
        </div>
      </section>

      <section id="crew" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold section-title">Crew</h2>
          <CrewList />
        </div>
      </section>

      <Footer />
    </main>
  )
}
