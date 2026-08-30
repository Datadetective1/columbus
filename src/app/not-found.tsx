import { Reveal } from "@/components/reveal";
import { Band, CtaButton } from "@/components/ui";

export default function NotFound() {
  return (
    <Band className="pt-20 md:pt-28">
      <div className="shell-narrow">
        <Reveal>
          <p className="t-label text-accent reveal">
            Not found
          </p>
          <h1 className="t-h1 reveal mt-8 text-ink">
            That page isn&rsquo;t here.
          </h1>
          <p className="t-lede reveal mt-7">
            The link may be old, or it may be something that was never built. Either way, the
            way back is short.
          </p>
          <div className="reveal mt-10">
            <CtaButton href="/">Back to the start</CtaButton>
          </div>
        </Reveal>
      </div>
    </Band>
  );
}
