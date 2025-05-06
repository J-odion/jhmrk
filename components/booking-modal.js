"use client"

import { useState } from "react"
import { FaTimes, FaCheck } from "react-icons/fa"

export default function BookingModal({ movie, onClose }) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedSeats, setSelectedSeats] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setSelectedTime("")
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  const handleSeatToggle = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat))
    } else {
      if (selectedSeats.length < 8) {
        setSelectedSeats([...selectedSeats, seat])
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
    }, 1500)
  }

  const nextStep = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2)
    } else if (step === 2 && selectedSeats.length > 0) {
      setStep(3)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const renderStep1 = () => (
    <div>
      <h3 className="text-xl font-bold mb-4">Select Date & Time</h3>
      <div className="mb-6">
        <h4 className="font-medium mb-2">Date</h4>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {movie.showtimes.map((showtime) => (
            <button
              key={showtime.date}
              className={`p-2 border rounded-md ${
                selectedDate === showtime.date
                  ? "bg-red-600 text-white border-red-600"
                  : "border-gray-300 hover:border-red-600"
              }`}
              onClick={() => handleDateSelect(showtime.date)}
            >
              {showtime.date}
            </button>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div>
          <h4 className="font-medium mb-2">Time</h4>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {movie.showtimes
              .find((s) => s.date === selectedDate)
              ?.times.map((time) => (
                <button
                  key={time}
                  className={`p-2 border rounded-md ${
                    selectedTime === time
                      ? "bg-red-600 text-white border-red-600"
                      : "border-gray-300 hover:border-red-600"
                  }`}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  )

  const renderStep2 = () => {
    // Create a 8x8 grid of seats
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]
    const cols = [1, 2, 3, 4, 5, 6, 7, 8]

    // Some random seats that are already taken
    const takenSeats = ["A1", "A2", "B5", "C3", "C4", "D7", "D8", "E2", "F1", "F5", "G6", "H3", "H4"]

    return (
      <div>
        <h3 className="text-xl font-bold mb-4">Select Seats</h3>
        <p className="mb-2 text-sm text-gray-600">
          Selected: {selectedDate} at {selectedTime}
        </p>
        <p className="mb-4 text-sm text-gray-600">You can select up to 8 seats. Selected: {selectedSeats.length}</p>

        <div className="mb-8">
          <div className="w-full bg-gray-800 h-6 rounded-t-lg mb-6 text-center text-white text-sm">Screen</div>

          <div className="grid grid-cols-8 gap-2 mb-4">
            {rows.map((row) =>
              cols.map((col) => {
                const seat = `${row}${col}`
                const isSelected = selectedSeats.includes(seat)
                const isTaken = takenSeats.includes(seat)

                return (
                  <button
                    key={seat}
                    disabled={isTaken}
                    className={`w-8 h-8 flex items-center justify-center rounded-md ${
                      isSelected
                        ? "bg-red-600 text-white"
                        : isTaken
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-white border border-gray-300 hover:border-red-600"
                    }`}
                    onClick={() => handleSeatToggle(seat)}
                  >
                    {seat}
                  </button>
                )
              }),
            )}
          </div>

          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border border-gray-300"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600"></div>
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300"></div>
              <span>Taken</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <div className="flex justify-between mb-2">
            <span>Tickets ({selectedSeats.length} x $12.00)</span>
            <span>${(selectedSeats.length * 12).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Booking Fee</span>
            <span>$1.50</span>
          </div>
          <div className="flex justify-between font-bold pt-2 border-t border-gray-300">
            <span>Total</span>
            <span>${(selectedSeats.length * 12 + 1.5).toFixed(2)}</span>
          </div>
        </div>
      </div>
    )
  }

  const renderStep3 = () => (
    <div>
      <h3 className="text-xl font-bold mb-4">Your Information</h3>
      <p className="mb-4 text-sm text-gray-600">
        {selectedSeats.length} seats for {movie.title} on {selectedDate} at {selectedTime}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <div className="flex justify-between mb-2">
            <span>Tickets ({selectedSeats.length} x $12.00)</span>
            <span>${(selectedSeats.length * 12).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Booking Fee</span>
            <span>$1.50</span>
          </div>
          <div className="flex justify-between font-bold pt-2 border-t border-gray-300">
            <span>Total</span>
            <span>${(selectedSeats.length * 12 + 1.5).toFixed(2)}</span>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
          >
            {isSubmitting ? "Processing..." : "Complete Booking"}
          </button>
        </div>
      </form>
    </div>
  )

  const renderConfirmation = () => (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <FaCheck className="text-green-600 text-2xl" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
      <p className="mb-6">
        Your booking for {movie.title} on {selectedDate} at {selectedTime} has been confirmed.
      </p>
      <p className="mb-2">
        <strong>Seats:</strong> {selectedSeats.join(", ")}
      </p>
      <p className="mb-6">
        <strong>Booking Reference:</strong> {Math.random().toString(36).substring(2, 10).toUpperCase()}
      </p>
      <p className="text-sm text-gray-600 mb-8">
        A confirmation email has been sent to {formData.email}. Please arrive 15 minutes before the show.
      </p>
      <button onClick={onClose} className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
        Close
      </button>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{isComplete ? "Booking Confirmed" : `Book Tickets: ${movie.title}`}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>

        <div className="p-6">
          {isComplete ? (
            renderConfirmation()
          ) : (
            <>
              {!isComplete && (
                <div className="flex mb-8">
                  <div
                    className={`flex-1 pb-2 text-center border-b-2 ${
                      step === 1 ? "border-red-600 text-red-600" : "border-gray-300"
                    }`}
                  >
                    Date & Time
                  </div>
                  <div
                    className={`flex-1 pb-2 text-center border-b-2 ${
                      step === 2 ? "border-red-600 text-red-600" : "border-gray-300"
                    }`}
                  >
                    Seats
                  </div>
                  <div
                    className={`flex-1 pb-2 text-center border-b-2 ${
                      step === 3 ? "border-red-600 text-red-600" : "border-gray-300"
                    }`}
                  >
                    Payment
                  </div>
                </div>
              )}

              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}

              {step !== 3 && !isComplete && (
                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <button
                      onClick={prevStep}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                    >
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  <button
                    onClick={nextStep}
                    disabled={
                      (step === 1 && (!selectedDate || !selectedTime)) || (step === 2 && selectedSeats.length === 0)
                    }
                    className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
                  >
                    Continue
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
