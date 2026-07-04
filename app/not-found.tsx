import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm uppercase tracking-wider text-gold-800">404</p>
      <h1 className="mt-2 text-3xl font-bold text-navy-900 md:text-4xl">
        Bu Səhifə Tapılmadı
      </h1>
      <p className="mt-3 max-w-md text-neutral-600">
        Axtardığınız səhifə silinib və ya ünvan dəyişib. Ana səhifəyə qayıdın.
      </p>
      <Link href="/" className="mt-8">
        <Button size="lg">
          Ana Səhifəyə Qayıt <ArrowRight className="size-4" />
        </Button>
      </Link>
    </section>
  );
}
