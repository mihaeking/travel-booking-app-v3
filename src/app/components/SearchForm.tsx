"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Ensure all fields are filled before redirecting
    if (!origin || !destination || !date) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate date: it should be in the future
    const selectedDate = new Date(date);
    const today = new Date();

    if (selectedDate < today) {
      alert("Please select a future date.");
      return;
    }

    // Redirect to search results with query parameters
    router.push(
      `/search/results?origin=${origin}&destination=${destination}&date=${date}`
    );
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-amber-500 shadow-lg p-10 rounded-lg max-w-md mx-auto my-10"
    >
      <div className="space-y-4 p-3 m-4">
        <input
          type="text"
          placeholder="From"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="p-3 rounded-lg w-80"
        />
      </div>
      <div className="space-y-4 p-3 m-4">
        <input
          type="text"
          placeholder="To"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="p-3 rounded-lg w-80"
        />
      </div>
      <div className="space-y-4 p-3 m-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 rounded-lg w-80"
        />
      </div>
      <button
        type="submit"
        className="p-3 rounded-lg w-50 bg-neutral-200 hover:bg-gray-500 text-black font-semibold transition duration-300 mx-auto mt-4 flex justify-center"
      >
        Search Trains
      </button>
    </form>
  );
}
