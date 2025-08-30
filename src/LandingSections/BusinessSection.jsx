// src/components/NewsSection.jsx
import dummy from "../assets/BusinessDummy.webp";

const newsData = [
  {
    id: 1,
    title: "Scaling domain expertise in complex, regulated domains",
    image: dummy,
    type: "API",
  },
  {
    id: 2,
    title: "Mixi reimagines communication with ChatGPT",
    image: dummy,
    type: "ChatGPT",
  },
  {
    id: 3,
    title: "Scaling accountin capacity with OpenAI",
    image: dummy,
    type: "API",
  },
];

export default function BusinessSection() {
  return (
    <section className="p-4">
      <div className="flex justify-between">
        <h2 className="text-xl mb-4">Stories</h2>
        <p className="cursor-pointer">View all</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
        {newsData.map(({ id, title, image, type }) => (
          <div key={id} className=" bg-white rounded-lg p-2 transition">
            <img
              src={image}
              alt={title}
              className="w-auto h-auto object-cover rounded-md flex-shrink-0"
            />

            <div className="justify-center gap-y-5 mt-3">
              <h3 className="font-semibold text-gray-800 text-base leading-snug break-words">
                {title}
              </h3>
              <p className="text-sm text-black mt-1">{type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
