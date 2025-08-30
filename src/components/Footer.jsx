import BottomFooter from "./BottomFooter";

const footerData = [
  {
    title: "Our Research",
    links: [
      { label: "Research Index", href: "#" },
      { label: "Research Overview", href: "#" },
      { label: "Research Residency", href: "#" },
    ],
  },
  {
    title: "Latest Advancements",
    links: [
      { label: "OpenAI o3", href: "#" },
      { label: "OpenAI o4-mini", href: "#" },
      { label: "GPT-4o", href: "#" },
      { label: "GPT-4o mini", href: "#" },
      { label: "Sora", href: "#" },
    ],
  },
  {
    title: "Safety",
    links: [
      { label: "Safety Approach", href: "#" },
      { label: "Security & Privacy", href: "#" },
      { label: "Trust & Transparency", href: "#" },
    ],
  },
  {
    title: "ChatGPT",
    links: [
      { label: "Explore ChatGPT ↗", href: "#" },
      { label: "Business", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "Education", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Download ↗", href: "#" },
    ],
  },
  {
    title: "Sora",
    links: [
      { label: "Sora Overview", href: "#" },
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Sora log in ↗", href: "#" },
    ],
  },
  {
    title: "API Platform",
    links: [
      { label: "Platform Overview", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "API log in ↗", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    title: "For Business",
    links: [
      { label: "Business Overview", href: "#" },
      { label: "Solutions", href: "#" },
      { label: "Contact Sales", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Charter", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Brand", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [{ label: "Help Center ↗", href: "#" }],
  },
  {
    title: "More",
    links: [
      { label: "News", href: "#" },
      { label: "Stories", href: "#" },
      { label: "Livestreams", href: "#" },
      { label: "Podcast", href: "#" },
    ],
  },
  {
    title: "Terms & Policies",
    links: [
      { label: "Terms of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Other Policies", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-gray-200 pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-y-6 md:gap-y-6 gap-x-3 md:gap-x-5">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className=" text-neutral-500 font-semibold text-sm mb-2">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-900 ">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <BottomFooter />
      </div>
    </footer>
  );
}
