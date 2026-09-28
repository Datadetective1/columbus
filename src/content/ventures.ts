/**
 * Venture partnerships.
 *
 * A pathway, not a fund. WAZA is not becoming a venture-capital site, and
 * nothing here implies capital, a portfolio, a track record of exits, or any
 * completed partnership — because there is none to claim.
 *
 * Every structure below is listed as *possible* and *mutually agreed*. That
 * wording is load-bearing: advisory, revenue participation, royalties and
 * equity are all things that get negotiated per deal, and stating them as
 * offers would commit Columbus to terms he has not set.
 *
 * Source: Columbus's own stated interests, supplied by the client.
 */

export const venturesIntro = {
  kicker: "Venture partnerships",
  headline: "Some ideas should become businesses, not consulting projects.",
  standfirst:
    "WAZA works selectively with builders, founders and operators where Columbus can contribute more than an engagement.",
};

/** What he actually brings. Nouns, not promises. */
export const whatWazaBrings = [
  { title: "Business design", body: "Turning a capability into something that can be sold." },
  { title: "Commercialization", body: "The route from working prototype to paying customer." },
  { title: "Sales strategy", body: "Who buys, why, and what has to be true for them to say yes." },
  { title: "Market positioning", body: "The difference between a good product and a legible one." },
  { title: "Partnerships", body: "Relationships and introductions built over two decades." },
  { title: "Strategic guidance", body: "The counsel a founder cannot get from inside the team." },
] as const;

/** Who it fits. Deliberately specific, so it also says who it does not fit. */
export const whoItFits = [
  "Builders and founders with a working idea",
  "Domain experts whose expertise has outgrown their delivery model",
  "Operators inside a business with something worth spinning out",
  "Small teams with a strong product and weak go-to-market",
] as const;

/**
 * How a collaboration might be structured. Never presented as a menu to pick
 * from — each one is a negotiation, and the copy says so.
 */
export const collaborationStructures = [
  "Advisory",
  "Revenue participation",
  "Royalties",
  "Equity",
  "Other agreed structures",
] as const;

export const venturesCta = {
  heading: "Have something worth exploring?",
  body: "Start a conversation. Early is better than polished.",
};
