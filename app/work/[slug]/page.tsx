import Link from "next/link";
import MapAppCaseStudy from "@/components/MapAppCaseStudy";
import ClarityCaseStudy from "@/components/ClarityCaseStudy";
import VaultCaseStudy from "@/components/VaultCaseStudy";
import FoxCaseStudy from "@/components/FoxCaseStudy";
import SuperBillCaseStudy from "@/components/SuperBillCaseStudy";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  switch (slug) {
    case "super-bill-automation":
      return <SuperBillCaseStudy />;

    case "mapapp":
      return <MapAppCaseStudy />;

    case "clarity":
      return <ClarityCaseStudy />;

    case "vault":
      return <VaultCaseStudy />;

    case "fox-rehabilitation":
      return <FoxCaseStudy />;

    default:
      return (
        <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-6 text-white">
          <div className="text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#FF5A00]">
              Project Not Found
            </p>

            <h1 className="mb-8 text-4xl font-semibold">
              This project does not exist.
            </h1>

            <Link
              href="/#projects"
              className="inline-flex border-b border-white/30 pb-2 text-sm transition-colors hover:border-[#FF5A00] hover:text-[#FF5A00]"
            >
              ← Back to Selected Work
            </Link>
          </div>
        </main>
      );
  }
}