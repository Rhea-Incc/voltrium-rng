/** Single place to change contact details. */
export const CONTACT_EMAIL = "odinga.billy@lucene.com";
export const CONTACT_PHONE = "+2547-2775-0097";
export const CONTACT_PHONE_HREF = "tel:+254727750097";

export const mailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
