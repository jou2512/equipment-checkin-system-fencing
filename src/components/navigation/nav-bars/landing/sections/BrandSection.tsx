import Link from "next/link";
import { Swords } from "lucide-react";

export function BrandSection() {
  return (
    <div className="flex items-center justify-start">
      <Link href="/" className="flex items-center space-x-2">
        <Swords className="h-8 w-8 text-primary" />
        <span className="ml-2 text-2xl font-bold">FECS</span>
      </Link>
    </div>
  );
}
