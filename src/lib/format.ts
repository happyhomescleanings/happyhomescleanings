export function formatPhoneDisplay(digits: string): string {
  const d = digits.replace(/\D/g, "");
  if (d.length === 10) {
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  }
  return digits;
}

export function phoneHref(digits: string): string {
  return `tel:+1${digits.replace(/\D/g, "")}`;
}
