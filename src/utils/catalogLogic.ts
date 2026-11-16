import type { SignaturePiece } from '../data/atelierCatalog';

export function nextSlideIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current + 1) % total;
}

export function prevSlideIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current - 1 + total) % total;
}

export function filterSignatures(
  items: SignaturePiece[],
  category: 'All' | 'Martini' | 'Spritz' | 'Evening'
): SignaturePiece[] {
  if (category === 'All') return items;
  return items.filter((item) => item.category === category);
}

export interface InquiryFormInput {
  name: string;
  email: string;
  salon: string;
}

export interface InquiryValidationResult {
  valid: boolean;
  errors: {
    name?: string;
    email?: string;
    salon?: string;
  };
}

export function validateInquiryForm(input: InquiryFormInput): InquiryValidationResult {
  const errors: InquiryValidationResult['errors'] = {};
  const trimmedName = input.name.trim();
  const trimmedEmail = input.email.trim();
  const trimmedSalon = input.salon.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!trimmedSalon) {
    errors.salon = 'Please select a tasting salon location.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
