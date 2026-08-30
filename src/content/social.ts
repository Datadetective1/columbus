/**
 * External profiles.
 *
 * ⚠️ The X account could not be opened from the build environment to confirm it
 * is live. Columbus should confirm all three before launch.
 * Set `enabled: false` on any link to remove it from the footer.
 */
export type SocialLink = {
  label: string;
  href: string;
  enabled: boolean;
};

export const social: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/columbusbrown/",
    enabled: true,
  },
  {
    label: "WAZA on LinkedIn",
    href: "https://www.linkedin.com/company/waza-consulting-llc/",
    enabled: true,
  },
  {
    label: "X",
    href: "https://x.com/wazasoln",
    enabled: true,
  },
];
