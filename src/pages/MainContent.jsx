import { FiArrowUp } from "react-icons/fi";

export default function MainContent() {
  const cards = [
    {
      name: "Card 1",
      color: "bg-blue-500",
    },
    {
      name: "Card 2",
      color: "bg-yellow-500",
    },
    {
      name: "Card 3",
      color: "bg-green-500",
    },
    {
      name: "Card 4",
      color: "bg-red-500",
    },
  ];
  return (
    <>
      {" "}
      <div className="flex  bg-none mb-2 ">
        <div
          className="flex-1  bg-[url('./assets/gpt-bg.jpg')] bg-no-repeat bg-center
       bg-cover flex justify-center items-center text-white hover:cursor-pointer"
        >
          <h1 className="text-9xl font-bold text-center transform transition-transform duration-300 hover:scale-110">
            GPT-5
          </h1>
        </div>

        <div className="w-1/4 h-100 p-4 flex flex-col ">
          <div className="flex-1 overflow-y-auto  space-y-3 ">
            {cards.map(({ name, color }, i) => (
              <>
                <div
                  key={i}
                  className={`${color} p-4 rounded-lg shadow hover:shadow-md transition h-40`}
                ></div>
                <p>{name}</p>
              </>
            ))}
          </div>
        </div>
        {/* Floating Action Button */}

        <form className="fixed bottom-6 left-1/2 z-50">
          {" "}
          <input
            type="text"
            placeholder="Ask ChatGPT"
            className=" bg-neutral-100 placeholder:text-[15px] hover:bg-neutral-200 
            outline-none text-neutral-800 p-4 rounded-full shadow-lg transition-all 
            duration-300 transform focus-within:w-96 mx-auto"
          />
          <button
            type="submit"
            aria-label="Send"
            className="absolute top-1/5 right-2 flex items-center p-2 rounded-full
             bg-neutral-500 justify-center hover:bg-neutral-400 transition "
          >
            {/* padding around the arrow (p-3 on button + pr-4 for extra right padding) */}
            <FiArrowUp className="text-neutral-300 text-xl" />
          </button>{" "}
        </form>
      </div>
      <h1 className="text-5xl mb-4">GPT-5 is here</h1>
    </>
  );
}
