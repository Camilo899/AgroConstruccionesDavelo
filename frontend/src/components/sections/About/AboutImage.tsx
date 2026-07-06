import aboutImage from "@/assets/images/about/about.webp";

export default function AboutImage() {
  return (
    <div className="relative">
      <img
        src={aboutImage}
        alt="Equipo de AgroConstrucciones Davelo"
        className="rounded-card shadow-card w-full object-cover"
      />
    </div>
  );
}