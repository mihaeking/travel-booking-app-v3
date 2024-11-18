"use client";

import React from "react";

import { useSearchParams } from "next/navigation";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const date = searchParams.get("date");

  const trains = [
    {
      id: 1,
      name: "Express 101",
      from: "City A",
      to: "City B",
      time: "09:00 AM",
    },
    {
      id: 2,
      name: "Fast 202",
      from: "City A",
      to: "City B",
      time: "11:00 AM",
    },
  ];

  return (
    <main>
      {/* 3. Display search details */}
      <h2 className="text-2xl font-bold mb-4">
        Trains from {origin} to {destination} on {date}
      </h2>

      {/* 4. Display train details that match criteria */}
      {trains
        .filter((train) => train.from === origin && train.to === destination) // filter by location
        .map((train) => (
          <div key={train.id} className="border-b border-gray-300 py-4">
            <h3 className="text-xl font-semibold">{train.name}</h3>
            <p className="text-gray-600">Departure: {train.time}</p>
            <a
              href={`/train/${train.id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </a>
          </div>
        ))}
    </main>
  );
}
