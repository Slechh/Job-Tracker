import Image from "next/image";
export default async function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <Image src="/DtrixLogo.png" alt="Dtrix" width={40} height={40} />
    </main>
  );
}
