import Button from '@/components/ui/Button';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-4 text-5xl font-bold">
        AgroConstrucciones Davelo
      </h1>

      <p className="mb-8 max-w-2xl text-lg text-text-light">
        Construimos soluciones para el sector agrícola y de infraestructura
        con calidad, compromiso e innovación.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button>Primario</Button>

        <Button variant="secondary">
          Secundario
        </Button>

        <Button variant="outline">
          Outline
        </Button>

        <Button variant="ghost">
          Ghost
        </Button>

        <Button variant="danger">
          Peligro
        </Button>
      </div>
    </main>
  );
}