// src/components/NewsSection.jsx
import React from "react";
import dummy from "../assets/dummy.jpg";

const newsData = [
  {
    id: 1,
    title: "OpenAI and Anthropic share findings from a joint safety evaluation",
    date: "Aug 27, 2025",
    image: dummy,
    type: "Safety",
  },
  {
    id: 2,
    title: "Introducing GPT-5 ",
    date: "Aug 7, 2025",
    image: dummy,
    type: "Release",
  },
  {
    id: 3,
    title: "Introducing GPT-5 for developers",
    date: "Aug 7, 2025",
    image: dummy,
    type: "Product",
  },
  {
    id: 4,
    title: "GPT-5 and the new era work",
    date: "Aug 7, 2025",
    image: dummy,
    type: "Product",
  },
  {
    id: 5,
    title:
      "From hard refusals to safe-completion: towards output-centeric safety training",
    date: "Aug 7, 2025",
    image: dummy,
    type: "Safety",
  },
  {
    id: 6,
    title: "Stargate advances with 4.5 GW partnership with Oracle",
    date: "July 22, 2025",
    image: dummy,
    type: "Company",
  },
];

export default function StoriesSection() {
  return (
    <section className="p-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Latest News</h2>
        <p>View all</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {newsData.map(({ id, image, title, date, type }) => (
          <div key={id} className="flex bg-white rounded-lg p-3 transition">
            <img
              src={image}
              alt={title}
              className="w-50 h-50 object-cover rounded-md flex-shrink-0"
            />

            {/* Text container takes the remaining width */}
            <div className="ml-4 justify-center gap-y-5 flex flex-col  flex-1">
              <h3 className="font-semibold text-gray-800 text-base leading-snug break-words">
                {title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                <span className="text-black font-medium">{type}: </span>
                {date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
