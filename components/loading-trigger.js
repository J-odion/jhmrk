"use client"

import { useLoading } from "./global-loading"

export default function LoadingTrigger() {
  const { showLoading, hideLoading } = useLoading()

  const handleShowLoading = () => {
    showLoading()
    // Auto-hide after 3 seconds for demonstration
    setTimeout(() => {
      hideLoading()
    }, 3000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        onClick={handleShowLoading}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all"
      >
        Show Loading
      </button>
    </div>
  )
}
