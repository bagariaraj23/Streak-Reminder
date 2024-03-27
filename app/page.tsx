"use client";

import Leetcode from "./leetcode";
import Codeforces from "./codeforces";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-blue-600 to-blue-100">
      <h1 className="flex items-center justify-center text-3xl md:text-5xl h-1/6 font-serif">
        Streak-Reminder
      </h1>
      <div className="flex-row md:flex h-auto md:h-5/6 w-full">
        <div className="h-full w-full">
          <Leetcode />
        </div>
        <div className="h-full w-full">
          <Codeforces />
        </div>
      </div>
    </div>
  );
}
