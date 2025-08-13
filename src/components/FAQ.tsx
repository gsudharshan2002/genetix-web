import React from 'react'

export default function FAQ() {
  return (
    <div className="space-y-6 my-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">
        Frequently Asked <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Questions</span>
      </h1>

      {/* FAQ Item */}
      <details className="group rounded-2xl border border-green-200 bg-green-50 shadow-md overflow-hidden transition-all duration-300" open>
        <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-green-100 transition-colors">
          <h2 className="text-base sm:text-lg font-semibold text-green-900">Who are you and what makes your company different?</h2>
          <svg
            className="w-5 h-5 text-green-700 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-700">
          We are a young startup built by talented professionals who faced career challenges during the layoff era.
          Instead of letting our skills go unused, we decided to help clients who prefer a more personal and flexible
          approach than big IT companies. At the same time, we provide opportunities for young talent to join our
          team, gain experience, and receive career guidance.
        </p>
      </details>

      {/* FAQ Item */}
      <details className="group rounded-2xl border border-green-200 bg-green-50 shadow-md overflow-hidden transition-all duration-300">
        <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-green-100 transition-colors">
          <h2 className="text-base sm:text-lg font-semibold text-green-900">What kind of projects do you work on?</h2>
          <svg
            className="w-5 h-5 text-green-700 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-700">
          We take on a wide variety of projects — from web development and social media engagement to complete digital
          solutions for businesses. We focus on delivering high-quality work while keeping the process simple,
          transparent, and client-friendly.
        </p>
      </details>

      {/* FAQ Item */}
      <details className="group rounded-2xl border border-green-200 bg-green-50 shadow-md overflow-hidden transition-all duration-300">
        <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer hover:bg-green-100 transition-colors">
          <h2 className="text-base sm:text-lg font-semibold text-green-900">How do you decide pricing for a project?</h2>
          <svg
            className="w-5 h-5 text-green-700 shrink-0 transition-transform duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-700">
          Our pricing is flexible and transparent. You can fix a budget for your project, and we’ll work with you to
          deliver the best possible outcome within that amount. For us, quality and client satisfaction matter more than
          the price tag.
        </p>
      </details>
    </div>
  )
}
