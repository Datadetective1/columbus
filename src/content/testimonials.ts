/**
 * Testimonials.
 *
 * Both quotes are reproduced CHARACTER-FOR-CHARACTER from the 2018 speaker
 * one-sheet, with the attribution exactly as printed there. Nothing has been
 * trimmed, tidied, or reworded. Do not edit the `quote` strings.
 *
 * ⚠️ These are roughly seven years old. Columbus should decide whether he still
 * wants them published and whether permission needs re-requesting.
 *
 * Set `enabled = false` to remove both from the site instantly.
 */

export const enabled = true;

export type Testimonial = {
  quote: string;
  attribution: string;
  source: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Columbus is a great facilitator and a story-teller. His focus on creating value for the attendees' companies & defining clear strategies through his methodology is AMAZING.",
    attribution: "Franklin Ilan",
    source: "Speaker profile, 2018",
  },
  {
    quote:
      "If you are really serious about making changes, I’d highly recommend that you sit down for a chat with Columbus.",
    attribution: "Doug Goldberg",
    source: "Speaker profile, 2018",
  },
];

export const visibleTestimonials = enabled ? testimonials : [];
