// Edit these once and every button on the site updates.
export const WHATSAPP_NUMBER = "234XXXXXXXXXX"; // digits only, with country code, e.g. 2348012345678
export const EMAIL = "hello@chessr.com";
export const LOCATION = "Lagos, Nigeria";

export function trialLink(plan?: string) {
  const text = plan
    ? `Hi ChessR Academy, I'd like a free trial class. I'm interested in: ${plan}.`
    : "Hi ChessR Academy, I'd like to book a free trial class.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function schoolLink() {
  const text = "Hi ChessR Academy, I'd like to talk about a chess program for our school.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
