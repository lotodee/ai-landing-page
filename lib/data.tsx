import Catalog from "@/public/svg-components/catalog"
import Circooles from "@/public/svg-components/circooles";
import Layers from "@/public/svg-components/layers";
import Quotient from "@/public/svg-components/quotient";
import Sisyphus from "@/public/svg-components/sisyphus"

export const logos = [
  {
    name: "Layers",
    logo: <Layers className="w-full h-full" />,
  },
  {
    name: "Sisyphus",
    logo: <Sisyphus className="w-full h-full" />,
  },
  {
    name: "Circooles",
    logo: <Circooles className="w-full h-ful" />,
  },
  {
    name: "Catalog",
    logo: <Catalog className="w-full h-ful" />,
  },
  {
    name: "Quotient",
    logo: <Quotient className="w-full h-ful" />,
  },
];

export const tabData = [
  {
    id: "Market Prediction",
    title: "Use AI insights for smarter business decisions and stay competitive.",
    description:
      "Our market prediction models analyze trends and provide actionable insights to help you make informed business decisions and stay ahead of the competition.",
    image: "/market.svg",
  },
  {
    id: "Finance",
    title: "Our AI models analyze financial data for smarter investments.",
    description:
      "Leverage advanced AI algorithms to analyze financial markets, identify patterns, and optimize your investment strategies for maximum returns.",
    image: "/finance.svg",
  },
  {
    id: "Analytics",
    title: "Transform raw data into actionable business intelligence.",
    description:
      "Our analytics models process vast amounts of data to extract meaningful insights, helping you understand customer behavior and optimize business operations.",
    image: "/analytics.svg",
  },
  {
    id: "Content Generation",
    title: "Create engaging content at scale with AI assistance.",
    description:
      "Generate high-quality, relevant content for your marketing campaigns, social media, and website with our advanced content generation models.",
    image: "/content.svg",
  },
  {
    id: "Customer Support",
    title: "Enhance customer experience with AI-powered support.",
    description:
      "Provide 24/7 customer support with our AI models that can understand queries, provide accurate responses, and escalate complex issues when necessary.",
    image: "/customer.svg",
  },
]

