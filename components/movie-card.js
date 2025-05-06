import Link from "next/link"
import { FaStar } from "react-icons/fa"

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img src={movie.posterImage || "/placeholder.svg"} alt={movie.title} className="w-full h-96 object-cover" />
          <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-2 py-1 rounded-md flex items-center">
            <FaStar className="mr-1" /> {movie.rating}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">{movie.title}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {movie.genres.map((genre) => (
              <span key={genre} className="px-2 py-1 bg-gray-100 text-xs rounded">
                {genre}
              </span>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{movie.duration}</span>
            <span>{movie.releaseYear}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
