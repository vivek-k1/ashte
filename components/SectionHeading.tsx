import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  align = "left",
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start";
  return (
    <Reveal className={`flex flex-col gap-3 ${alignCls}`}>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-saffron-600" />
        <span className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-saffron-500">
          {kicker}
        </span>
        {align === "center" && <span className="h-px w-10 bg-saffron-600" />}
      </div>
      <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-parchment-100 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
