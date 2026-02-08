"use client";
import { useState } from "react";

export default function BookPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="min-h-screen bg-[#f5f1eb] flex items-center justify-center px-4">

      {/* FORM BOX */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm">

        <h1 className="text-[26px] font-semibold text-[#2e3a34] text-center">
          Book Consultation
        </h1>

        <p className="text-center mt-2 text-sm text-[#2e3a34]/80">
          Select date & time
        </p>

        {/* DATE */}
        <div className="mt-5">
          <label className="text-sm text-[#2e3a34]">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full mt-1 border p-2 rounded-md"
          />
        </div>

        {/* TIME */}
        <div className="mt-4">
          <label className="text-sm text-[#2e3a34]">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full mt-1 border p-2 rounded-md"
          />
        </div>

        {/* BUTTON */}
        <button className="w-full mt-6 bg-[#2e3a34] text-white py-2 rounded-md">
          Confirm
        </button>

        {/* BACK */}
        <a href="/" className="block text-center mt-4 text-sm underline text-[#2e3a34]">
          ← Back
        </a>

      </div>
    </div>
  );
}
