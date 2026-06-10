interface Props {
  number: number;
  name: string;
  purpose: string;
  /** Tone influences badge contrast over dark vs light section backgrounds. */
  tone?: "light" | "dark";
}

// The demo "what this section is for" badges are hidden on the live site.
// To show them again, restore the original badge markup from the boilerplate.
export default function SectionBadge(_props: Props) {
  return null;
}
