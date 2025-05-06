"use client"

import { useState } from "react"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import { FaUser, FaTicketAlt, FaHistory, FaCreditCard, FaSignOutAlt } from "react-icons/fa"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  // Mock data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+234 123 456 7890",
  }

  const bookings = [
    {
      id: "B12345",
      movie: "Across The Valley",
      date: "May 7, 2023",
      time: "8:00 PM",
      seats: ["C4", "C5", "C6"],
      total: "$37.50",
    },
    {
      id: "B12346",
      movie: "Love in Buruku",
      date: "April 15, 2023",
      time: "5:45 PM",
      seats: ["D7", "D8"],
      total: "$25.50",
    },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Profile</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  <FaUser size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-gray-600">{user.phone}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue={user.phone}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    defaultValue="********"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )
      case "bookings":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
            {bookings.length > 0 ? (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{booking.movie}</h3>
                        <p className="text-gray-600">
                          {booking.date} at {booking.time}
                        </p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Confirmed</span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Booking ID</p>
                        <p className="font-medium">{booking.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Seats</p>
                        <p className="font-medium">{booking.seats.join(", ")}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total</p>
                        <p className="font-medium">{booking.total}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition">
                        View Ticket
                      </button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                        Cancel Booking
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-gray-400 mb-4">
                  <FaTicketAlt size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2">No Bookings Yet</h3>
                <p className="text-gray-600 mb-4">You haven't made any bookings yet.</p>
                <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
                  Browse Movies
                </button>
              </div>
            )}
          </div>
        )
      case "payment":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Saved Payment Methods</h3>
                <button className="text-red-600 hover:text-red-700">+ Add New</button>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-md p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded-md">
                      <FaCreditCard className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-gray-600">Expires 05/2025</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-600 hover:text-gray-800">Edit</button>
                    <button className="text-red-600 hover:text-red-700">Remove</button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-2 rounded-md">
                      <FaCreditCard className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Mastercard ending in 5678</p>
                      <p className="text-sm text-gray-600">Expires 08/2024</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-600 hover:text-gray-800">Edit</button>
                    <button className="text-red-600 hover:text-red-700">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 bg-red-600 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-600">
                      <FaUser size={24} />
                    </div>
                    <div>
                      <h2 className="font-bold">{user.name}</h2>
                      <p className="text-sm">{user.email}</p>
                    </div>
                  </div>
                </div>
                <nav className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setActiveTab("profile")}
                        className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-3 ${
                          activeTab === "profile" ? "bg-red-50 text-red-600" : "hover:bg-gray-100"
                        }`}
                      >
                        <FaUser /> Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("bookings")}
                        className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-3 ${
                          activeTab === "bookings" ? "bg-red-50 text-red-600" : "hover:bg-gray-100"
                        }`}
                      >
                        <FaTicketAlt /> My Bookings
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("history")}
                        className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-3 ${
                          activeTab === "history" ? "bg-red-50 text-red-600" : "hover:bg-gray-100"
                        }`}
                      >
                        <FaHistory /> Watch History
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab("payment")}
                        className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-3 ${
                          activeTab === "payment" ? "bg-red-50 text-red-600" : "hover:bg-gray-100"
                        }`}
                      >
                        <FaCreditCard /> Payment Methods
                      </button>
                    </li>
                    <li className="pt-4 border-t">
                      <button className="w-full text-left px-4 py-2 rounded-md flex items-center gap-3 text-red-600 hover:bg-red-50">
                        <FaSignOutAlt /> Sign Out
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="md:col-span-3">{renderTabContent()}</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
