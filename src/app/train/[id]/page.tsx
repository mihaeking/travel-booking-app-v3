"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function TrainDetails() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const trainId = searchParams.get("trainId");

  const trainData = [
    {
      id: "1",
      name: "Express 101",
      from: "City A",
      to: "City B",
      time: "09:00 AM",
      duration: "2 hours",
      fare: "$50",
    },
    {
      id: "2",
      name: "Fast 202",
      from: "City A",
      to: "City B",
      time: "11:00 AM",
      duration: "2.5 hours",
      fare: "$55",
    },
  ];
  const train = trainData.find((t) => t.id === trainId);
  if (!train) {
    return <p>Train not found</p>;
  }
  return (
    <main className="p-8">
      <h2 className="text-3xl font-bold mb-4">{train.name}</h2>

      <p>
        <strong>From:</strong> {train.from}
      </p>
      <p>
        <strong>To:</strong> {train.to}
      </p>
      <p>
        <strong>Departure Time:</strong> {train.time}
      </p>
      <p>
        <strong>Duration:</strong> {train.duration}
      </p>
      <p>
        <strong>Fare:</strong> {train.fare}
      </p>

      <button
        onClick={() => router.push(`/confirm/${train.id}`)}
        className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500"
      >
        Book Now
      </button>
    </main>
  );
}
