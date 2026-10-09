import { createFileRoute } from "@tanstack/react-router";

import { CTA } from "@/components/voltrium/CTA";
import { Footer } from "@/components/voltrium/Footer";
import { Navbar } from "@/components/voltrium/Navbar";

const title = "Contact Voltrium — Partner on the Electric Highway";
const description =
  "Contact Voltrium in Nairobi, Kenya. Send a partnership inquiry about charging infrastructure for long-distance electric transport in East Africa.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <CTA headingLevel="h1" />
      </main>
      <Footer />
    </div>
  );
}
