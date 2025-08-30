const GetStarted = () => {
  return (
    <div className="my-10 ">
      <div className="p-[50px] md:p-[100px] flex flex-col items-center justify-center rounded-lg bg-neutral-100">
        <h1 className="text-black  text-xl md:text-4xl">
          Get Started with ChatGPT
        </h1>
        <button className="cursor-pointer bg-neutral-200 py-2 px-3  rounded-3xl my-5 md:my-10 ">
          {" "}
          Download
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
