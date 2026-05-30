import Image from "next/image";

export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  imageAlt?: string;
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
      <div className="relative mx-auto flex aspect-[4/3] w-full max-w-md items-center justify-center overflow-hidden rounded-2xl bg-brand-warm">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.imageAlt ?? member.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 90vw, 448px"
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
