import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-5xl flex-col-reverse items-center justify-center gap-10 px-6 py-20 md:flex-row md:justify-between"
    >
      <div className="max-w-xl text-center md:text-left">
        <p className="text-sm font-medium text-gray-500">Halo, saya</p>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">Rafli</h1>
        <p className="mt-2 text-lg text-gray-600">
          Mahasiswa Teknik Informatika &amp; calon Full-Stack Developer
        </p>
        <p className="mt-4 text-gray-600">
          Mahasiswa Teknik Informatika Semester 5 di Universitas Nusantara PGRI
          Kediri dengan peminatan di fullstack developer.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href="https://github.com/maulanaraflinugraha13-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mochammad-rafli-maulana-nugraha-23451b421"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium hover:bg-gray-100"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <Image
        src="/profile1.jpeg"
        alt="Foto profil Rafli"
        width={288}
        height={288}
        priority
        className="h-56 w-56 rounded-full object-cover md:h-72 md:w-72"
      />
    </section>
  );
}