import AcmeLogo from "@/app/ui/acme-logo";
import Link from "next/link";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col p-6 h-screen">
      <section className="bg-slate-100 flex flex-col justify-center items-center h-full rounded-lg">
        <h2 className="text-9xl text-red-500">404</h2>
        <p className="my-5 text-center">Couldn't find the page you're looking for</p>
        <Link
          href="/"
          className="flex items-center gap-5 mt-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Go Home</span>
        </Link>
      </section>
    </main>
  );
}
