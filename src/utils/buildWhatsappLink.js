/**
 * Takes an object of form values and returns a `https://wa.me/...` link
 * encoding all the data in the query string message.
 */

export function buildWhatsappLink({
  name,
  email,
  drawingType,
  extras,
  description,
  price,
}) {
  // Debora’s phone number in international format, without “+” or leading zeros.
  // e.g. Brazil: country code 55 → “5581999999999”
  const phoneNumber = "5581999999999";

  // Construct a multi-line message template
  let message = `Hello Debora,\n\n`;
  message += `I’d like to place an order for a digital drawing. Here are my details:\n\n`;
  message += `• Name: ${name}\n`;
  message += `• Email: ${email}\n`;
  message += `• Type of Drawing: ${drawingType}\n`;

  if (extras && extras.length > 0) {
    message += `• Extras: ${extras.join(", ")}\n`;
  }

  if (description) {
    message += `• Description: ${description}\n`;
  }

  message += `\nTotal Price: ${price}\n\n`;
  message += `Please let me know the next steps. Thank you!`;

  // URL‐encode the full message
  const encoded = encodeURIComponent(message);

  return `https://wa.me/${phoneNumber}?text=${encoded}`;
}
