import { createFileRoute } from "@tanstack/react-router";

import { CTA } from "@/components/voltrium/CTA";
import { Corridor } from "@/components/voltrium/Corridor";
import { Ecosystem } from "@/components/voltrium/Ecosystem";
import { ElectricHighway } from "@/components/voltrium/ElectricHighway";
import { Energy } from "@/components/voltrium/Energy";
import { Footer } from "@/components/voltrium/Footer";
import { Hero } from "@/components/voltrium/Hero";
import { Infrastructure } from "@/components/voltrium/Infrastructure";
import { Navbar } from "@/components/voltrium/Navbar";
import { Network } from "@/components/voltrium/Network";
import { Operators } from "@/components/voltrium/Operators";
import { Problem } from "@/components/voltrium/Problem";
import { Solution } from "@/components/voltrium/Solution";

const title = "Voltrium — Building the Electric Highway";
const description =
  "Voltrium builds and operates charging infrastructure for electric long-distance commercial transport across Kenya and East Africa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ElectricHighway />
        <Infrastructure />
        <Energy />
        <Corridor />
        <Operators />
        <Network />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
