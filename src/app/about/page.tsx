import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { siteImages } from "@/content/images";
import { serviceAreaTowns } from "@/content/services";
import { teamMembers } from "@/content/team";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet the team behind ${site.name} and learn where we serve in the ${site.location.area}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Happy Homes"
        description="Local, reliable, and judgment-free — we're here to make your home feel cared for."
        image={siteImages.aboutHeader}
        imageAlt="Cozy, well-kept living room"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Who we are</h2>
            <p className="mt-4 leading-relaxed text-brand-muted">
              Happy Homes Services is a Rapid City–area team offering house cleaning, deep cleans, rental turnovers, pet care, and more. We treat every home with respect and every client with compassion — whether you need weekly maintenance, a one-time reset, or help during a busy season of life.
            </p>
            <p className="mt-4 leading-relaxed text-brand-muted">
              We bring our own supplies unless you prefer otherwise, work around your schedule, and welcome homes with pets when it&apos;s safe for everyone.
            </p>
            <Button href="/contact" className="mt-8">
              Work with us
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={siteImages.heroAlt}
              alt="Clean home environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section alt title="Our team">
        <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </Section>

      <Section
        title="Where we serve"
        description={`Professional cleaning in the ${site.location.area} and nearby communities.`}
      >
        <ul className="flex flex-wrap gap-2">
          {serviceAreaTowns.map((town) => (
            <li
              key={town}
              className="rounded-full border border-brand-sand bg-brand-white px-4 py-2 text-sm font-medium text-brand-ink"
            >
              {town}, {site.location.stateAbbr}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-brand-muted">
          Don&apos;t see your town? Reach out — we may still be able to help.
        </p>
      </Section>
    </>
  );
}
