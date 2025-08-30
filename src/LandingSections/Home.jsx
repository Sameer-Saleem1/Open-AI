import { useState } from "react";
import Hero from "../components/Hero";
import SearchInput from "../components/SearchInput";
import SuggestionPills from "../components/SuggestionPills";

const SUGGESTIONS = [
  "Learn about ChatGPT Business",
  "Search with ChatGPT",
  "Talk with ChatGPT",
  "Research",
  "More",
];

export default function Home() {
  const [query, setQuery] = useState("");

  const handlePillClicked = (query) => setQuery(query);
  const handleQuerySubmit = () => {
    console.log("Submitted: ", query);
  };

  return (
    <Hero>
      <SearchInput
        value={query}
        onChange={setQuery}
        onSubmit={handleQuerySubmit}
        placeholder="Plan a trip to Naran in August"
      />
      <div className=" md:w-1/2 md:mx-auto flex justify-center items-center ">
        <SuggestionPills items={SUGGESTIONS} onPick={handlePillClicked} />
      </div>
    </Hero>
  );
}
