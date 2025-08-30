// src/components/NewsSection.jsx
import dummy from "../assets/StoriesDummy.webp";
import dummyGirl from "../assets/dummyGirl.webp";

const newsData = [
  {
    id: 1,
    title: "OpenAI and Anthropic share findings from a joint safety evaluation",
    date: "Aug 7, 2025",
    image: dummy,
    timeToRead: "2 min read",
  },
  {
    id: 2,
    title: "Introducing GPT-5 ",
    date: "Aug 7, 2025",
    image: dummyGirl,
    timeToRead: "2 min read",
  },
  {
    id: 3,
    title: "Introducing GPT-5 for developers",
    date: "Aug 7, 2025",
    image: dummy,
    timeToRead: "2 min read",
  },
];

export default function StoriesSection() {
  return (
    <section className="p-4">
      <div className="flex justify-between">
        <h2 className="text-xl mb-4">Stories</h2>
        <p className="cursor-pointer">View all</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
        {newsData.map(({ id, image, title, date, timeToRead }) => (
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
              <p className="text-sm text-gray-500 mt-1">
                <span className="text-black font-medium pr-3">GPT-5 </span>
                {date}
                <span className="px-2">{timeToRead}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
