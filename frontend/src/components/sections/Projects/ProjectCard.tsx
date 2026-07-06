interface Props {
  title: string;
  location: string;
  image: string;
}

export default function ProjectCard({
  title,
  location,
  image,
}: Props) {
  return (
    <article className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-text-light">
          {location}
        </p>

        <button className="mt-5 font-semibold text-primary hover:underline">
          Ver proyecto →
        </button>
      </div>
    </article>
  );
}