import { FiArrowUp } from "react-icons/fi";

export default function MainContent() {
  const cards = [
    { name: "Card 1", color: "bg-blue-500" },
    { name: "Card 2", color: "bg-yellow-500" },
    { name: "Card 3", color: "bg-green-500" },
    { name: "Card 4", color: "bg-red-500" },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-none mb-2 gap-4">
        <div className="flex-1">
          <div
            className=" bg-[url('./assets/gpt-bg.jpg')] bg-no-repeat bg-center bg-cover
          flex justify-center items-center text-white hover:cursor-pointer min-h-[300px] lg:min-h-[500px]"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold text-center transform transition-transform duration-300 hover:scale-110">
              GPT-5
            </h1>
          </div>
          <h1 className="pt-5 text-3xl sm:text-4xl lg:text-5xl mb-4">
            GPT-5 is here
          </h1>
        </div>

        <div className="lg:w-1/4 h-80 lg:h-150 p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-3">
            {cards.map(({ name, color }, i) => (
              <div key={i}>
                <div
                  className={`${color} p-4 rounded-lg shadow hover:shadow-md transition h-32 sm:h-40`}
                ></div>
                <p className="mt-1 text-sm sm:text-base">{name}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="fixed bottom-6 md:left-1/2 left-1/4 z-50">
          {" "}
          <input
            type="text"
            placeholder="Ask ChatGPT"
            className=" bg-neutral-100 placeholder:text-[15px]
             hover:bg-neutral-200 outline-none text-neutral-800 p-4 rounded-full shadow-lg
             transition-all duration-300 transform focus-within:w-auto mx-auto md:focus-within:w-96"
          />{" "}
          <button
            type="submit"
            aria-label="Send"
            className="absolute top-1/5 right-2 flex items-center p-2 rounded-full
             bg-neutral-500 justify-center hover:bg-neutral-400 transition "
          >
            <FiArrowUp className="text-neutral-300 text-xl" />{" "}
          </button>{" "}
        </form>
      </div>
    </>
  );
}
