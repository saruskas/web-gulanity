type HeroShowcaseSkeletonProps = {
  variant?: "light" | "dark";
};

export function HeroShowcaseSkeleton({ variant = "light" }: HeroShowcaseSkeletonProps) {
  const panelColor = variant === "dark" ? "bg-white/10" : "bg-gray-200";
  const borderColor = variant === "dark" ? "border-white/10" : "border-gray-200";
  return (
    <div className={`w-full max-w-[720px] rounded-[32px] ${borderColor} border p-6 animate-pulse`}>
      <div className={`h-64 rounded-2xl ${panelColor}`} />
      <div className="mt-6 space-y-3">
        <div className={`h-4 rounded-full ${panelColor}`} />
        <div className={`h-3 rounded-full ${panelColor}`} />
        <div className={`h-3 w-2/3 rounded-full ${panelColor}`} />
      </div>
    </div>
  );
}

export function ContentSectionSkeleton() {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm animate-pulse">
      <div className="h-5 w-1/3 rounded-full bg-gray-200 mb-4" />
      <div className="space-y-3">
        <div className="h-4 rounded-full bg-gray-200" />
        <div className="h-4 rounded-full bg-gray-200" />
        <div className="h-4 w-3/4 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}

