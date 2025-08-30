// src/components/NewsSection.jsx
import dummy from "../assets/ResearchDummy.webp";
import dummyPink from "../assets/ResearchPinkDummy.webp";

const newsData = [
  {
    id: 1,
    title: "Accelerating life sciences research",
    date: "Aug 22, 2025",
    image: dummy,
  },
  {
    id: 2,
    title: "Pioneering an AI clinical copilot with Penda Health ",
    date: "Jul 22, 2025",
    image: dummyPink,
  },
];

export default function LatestResearch() {
  return (
    <section className="p-4">
      <div className="flex justify-between">
        <h2 className="text-xl pl-3 mb-4">Latest Research</h2>
        <p className="cursor-pointer">View all</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        {newsData.map(({ id, image, title, date }) => (
          <div key={id} className=" bg-white rounded-lg p-3 transition">
            <img
              src={image}
              alt={title}
              className="w-auto h-auto object-cover rounded-md flex-shrink-0"
            />

            <div className="justify-center gap-y-5 mt-3">
              <h3 className="text-xl font-semibold text-gray-800 leading-snug break-words">
                {title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                <span className="text-black font-medium pr-3">Publication</span>
                {date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
