import Image from "next/image";

export type TeamMember = {
  name: string;
  role: string;
  /** Set when a real headshot is available (e.g. /images/hailey.jpg). */
  image?: string;
};

function initialsFor(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="text-center">
      <div className="relative mx-auto flex aspect-[3/4] w-full max-w-[240px] items-center justify-center overflow-hidden rounded-2xl bg-brand-warm">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="240px"
          />
        ) : (
          <span
            className="text-5xl font-semibold text-brand-clay/70"
            aria-hidden
          >
            {initialsFor(member.name)}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
      <p className="text-sm text-brand-muted">{member.role}</p>
    </article>
  );
}
