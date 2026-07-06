import aboutImage from "@/assets/images/about/about.webp";

export default function AboutImage() {
  return (
    <img
      src={aboutImage}
      alt="Equipo AgroConstrucciones Davelo"
      className="rounded-card shadow-card"
    />
  );
}