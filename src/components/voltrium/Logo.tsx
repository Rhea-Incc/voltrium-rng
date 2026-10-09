import logo from "@/assets/voltrium-logo-updated.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Voltrium"
      width={753}
      height={250}
      className={cn("h-auto w-[105px] md:w-[145px]", className)}
    />
  );
}
