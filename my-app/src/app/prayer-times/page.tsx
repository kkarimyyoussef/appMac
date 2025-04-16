"use client";

export default function PrayerTimes() {
  return (
    <div className="text-center text-white">
      <h1 className="text-3xl font-bold mt-10">🕌 Prayer Times Page</h1>

      <div className="mt-8 max-w-md mx-auto bg-white/10 rounded-lg shadow-md p-6">
        <ul className="space-y-3 text-lg">
          <li>Fajr: 5:12 AM</li>
          <li>Dhuhr: 1:20 PM</li>
          <li>Asr: 4:55 PM</li>
          <li>Maghrib: 7:45 PM</li>
          <li>Isha: 9:10 PM</li>
        </ul>
      </div>
    </div>
  );
}
