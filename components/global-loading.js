"use client"

import { createContext, useContext, useState, useEffect } from "react"
import LoadingScreen from "./loading-screen"

const LoadingContext = createContext({
  isLoading: false,
  showLoading: () => {},
  hideLoading: () => {},
})

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingTimeout, setLoadingTimeout] = useState(null)

  // Clear any existing timeout when component unmounts
  useEffect(() => {
    return () => {
      if (loadingTimeout) {
        clearTimeout(loadingTimeout)
      }
    }
  }, [loadingTimeout])

  const showLoading = () => {
    // Clear any existing timeout
    if (loadingTimeout) {
      clearTimeout(loadingTimeout)
      setLoadingTimeout(null)
    }
    setIsLoading(true)
  }

  const hideLoading = () => {
    setIsLoading(false)
  }

  // Add a safety timeout to ensure loading screen doesn't get stuck
  const showLoadingWithTimeout = (timeout = 10000) => {
    showLoading()
    const timeoutId = setTimeout(() => {
      hideLoading()
    }, timeout)
    setLoadingTimeout(timeoutId)
  }

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading: showLoadingWithTimeout, hideLoading }}>
      {isLoading && <LoadingScreen />}
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  return useContext(LoadingContext)
}
