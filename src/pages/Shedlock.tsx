import shedlockIcon from "../assets/products/shedlock-icon.png";
import { shedlock } from "../content/shedlock";
import { linkHandler } from "../lib/router";
import { useTitle } from "./useTitle";

export function Shedlock() {
  useTitle(`${shedlock.name} — Kapeta Labs`);

  return (
    <section aria-labelledby="shedlock-title" className="py-20 sm:py-28">
      <div className="container-k max-w-3xl">
        <a href="/" onClick={linkHandler("/#products")} className="group inline-flex items-center gap-2 text-sm text-graphite hover:text-ink">
          <span aria-hidden="true">←</span> Kapeta Labs
        </a>

        <div className="mt-12 flex items-center gap-6">
          <img
            src={shedlockIcon}
            alt="Shedlock app icon"
            width={96}
            height={96}
            className="h-20 w-20 rounded-[22px] border border-line sm:h-24 sm:w-24"
          />
          <div>
            <p className="eyebrow">Mobile game</p>
            <h1 id="shedlock-title" className="mt-2 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
              {shedlock.name}
            </h1>
          </div>
        </div>

        <p className="mt-8 text-2xl font-medium tracking-[-0.02em]">{shedlock.tagline}</p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite">
          A modern take on Snake. Shed your tail to leave temporary walls, trap fleeing prey to lock it
          for a bonus, rewind three seconds when you crash, and play the same daily board as everyone else.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={shedlock.playUrl}
            className="group on-ink inline-flex h-12 items-center gap-3 rounded-full bg-ink px-6 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-ink-soft"
          >
            Get it on Google Play <span className="arrow" aria-hidden="true">→</span>
          </a>
          <p className="text-sm text-mist">Android · Free with optional in-app purchases</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Support</p>
            <a href={`mailto:${shedlock.supportEmail}`} className="mt-3 inline-block font-mono text-[0.9375rem] break-all hover:underline">
              {shedlock.supportEmail}
            </a>
          </div>
          <div>
            <p className="eyebrow">Legal</p>
            <a
              href="/shedlock/privacy"
              onClick={linkHandler("/shedlock/privacy")}
              className="mt-3 inline-block text-[0.9375rem] hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
