import logo from "@/assets/voltrium-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Voltrium"
      width={480}
      height={155}
      className={cn("h-auto w-[105px] md:w-[145px]", className)}
    />
  );
}
