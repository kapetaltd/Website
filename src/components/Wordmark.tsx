/**
 * Text wordmark. To use the final logo asset, replace the <span> below with
 * e.g. <img src="/kapeta-labs-logo.svg" alt="Kapeta Labs" className="h-5 w-auto" />.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`text-[0.9375rem] font-semibold uppercase leading-none tracking-[0.22em] ${className}`}>
      Kapeta Labs
    </span>
  );
}
