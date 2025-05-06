export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-t-4 border-b-4 border-red-600 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-r-4 border-l-4 border-white rounded-full animate-spin animate-reverse"></div>
      </div>
      <h2 className="text-white text-2xl font-bold">Loading...</h2>
      <p className="text-gray-300 mt-2 text-center max-w-md px-4">
        Please wait while we prepare your cinematic experience
      </p>
    </div>
  )
}
