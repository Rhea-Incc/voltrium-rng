/**
 * Single place to change contact details.
 * Replace CONTACT_EMAIL with the real Voltrium address when it is available.
 */
export const CONTACT_EMAIL = "contact@voltrium.example";

export const mailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
