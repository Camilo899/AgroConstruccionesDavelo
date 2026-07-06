import { Button } from "@/components/ui";

export default function ContactForm() {
  return (
    <form className="space-y-5">
      <input
        className="w-full rounded-button border border-border p-4"
        placeholder="Nombre completo"
      />

      <input
        className="w-full rounded-button border border-border p-4"
        placeholder="Correo electrónico"
      />

      <input
        className="w-full rounded-button border border-border p-4"
        placeholder="Teléfono"
      />

      <textarea
        rows={5}
        className="w-full rounded-button border border-border p-4"
        placeholder="Cuéntenos sobre su proyecto..."
      />

      <Button size="lg">
        Enviar mensaje
      </Button>
    </form>
  );
}