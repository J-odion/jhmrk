export default function MovieDetails() {
  const movieDetails = {
    title: "Across The Valley",
    tagline: "A love thriller that will be hitting your screens soon",
    director: "JOHNMARK MHENGA IYOO",
    releaseYear: "2025",
    duration: "1h 30m",
    genres: ["Romance", "Drama", "Thriller"],
    language: "English",
    rating: "PG-13",
    synopsis: `Seun is posted to do his National Youth Service Corp (NYSC) in Benue state, with his place of Primary
    Assignment (PPA) in Buruku local government, where he was warmly and heartedly received by the community
    people with the approval of the Chief in charge of the community.
    
    Not only did Seun find the culture of the Tiv unusually hospitable, he also found the daughter of the Chief,
    Sena, valuable enough to be the wife he wants to spend the rest of his life with. But this desire is met with
    trembling adversity from someone who would stand his ground to see that his childhood love is not married out
    to an estranged corper who thinks he is qualified to marry the chief's daughter because of the community
    acceptance.`,
    productionInfo: `Filmed on location in Benue State, Nigeria. Production completed in December 2024.`,
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-4 md:p-8">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 order-2 md:order-1">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{movieDetails.title}</h1>
            <p className="text-gray-600 italic mb-4">{movieDetails.tagline}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {movieDetails.genres.map((genre) => (
                <span key={genre} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div>
                <h3 className="text-sm text-gray-500">Director</h3>
                <p className="font-medium">{movieDetails.director}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Release Year</h3>
                <p className="font-medium">{movieDetails.releaseYear}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Duration</h3>
                <p className="font-medium">{movieDetails.duration}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Language</h3>
                <p className="font-medium">{movieDetails.language}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500">Rating</h3>
                <p className="font-medium">{movieDetails.rating}</p>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-3">Synopsis</h2>
            <div className="prose max-w-none mb-6">
              {movieDetails.synopsis.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-3">Production Information</h2>
            <p className="text-gray-700">{movieDetails.productionInfo}</p>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="/poster.jpg?height=600&width=400"
              alt="Across The Valley Movie Poster"
              className="w-full rounded-lg shadow-md mb-4"
            />

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Watch the Trailer</h3>
              <a
                href="https://youtu.be/bDBX2vtlaBU?si=wMSDQ03DqGMR_fdd"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-red-600 text-white text-center py-2 rounded-md hover:bg-red-700 transition"
              >
                View on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
