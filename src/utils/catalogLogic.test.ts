import test from 'node:test';
import assert from 'node:assert/strict';
import {
  nextSlideIndex,
  prevSlideIndex,
  filterSignatures,
  validateInquiryForm,
} from './catalogLogic';
import { SIGNATURE_PIECES, BOTTLE_COLLECTION } from '../data/atelierCatalog';

test('nextSlideIndex wraps forward cleanly', () => {
  assert.equal(nextSlideIndex(0, 7), 1);
  assert.equal(nextSlideIndex(6, 7), 0);
  assert.equal(nextSlideIndex(0, 0), 0);
});

test('prevSlideIndex wraps backward cleanly', () => {
  assert.equal(prevSlideIndex(0, 7), 6);
  assert.equal(prevSlideIndex(3, 7), 2);
  assert.equal(prevSlideIndex(0, 0), 0);
});

test('filterSignatures filters by cocktail category and returns all on All', () => {
  const all = filterSignatures(SIGNATURE_PIECES, 'All');
  assert.equal(all.length, SIGNATURE_PIECES.length);

  const martini = filterSignatures(SIGNATURE_PIECES, 'Martini');
  assert.ok(martini.length > 0);
  assert.ok(martini.every((item) => item.category === 'Martini'));

  const spritz = filterSignatures(SIGNATURE_PIECES, 'Spritz');
  assert.ok(spritz.length > 0);
  assert.ok(spritz.every((item) => item.category === 'Spritz'));

  const evening = filterSignatures(SIGNATURE_PIECES, 'Evening');
  assert.ok(evening.length > 0);
  assert.ok(evening.every((item) => item.category === 'Evening'));
});

test('BOTTLE_COLLECTION defines all three Bulgarian White Horse expressions', () => {
  assert.equal(BOTTLE_COLLECTION.length, 3);
  assert.ok(BOTTLE_COLLECTION.every((b) => b.fullName.includes('Bulgarian White Horse')));
});

test('validateInquiryForm catches invalid inputs and passes valid submission', () => {
  const invalid = validateInquiryForm({ name: 'A', email: 'bad-email', salon: '' });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.salon);

  const valid = validateInquiryForm({
    name: 'Elena Georgieva',
    email: 'elena@whitehorse.bg',
    salon: 'Rila Mountain Distillery, Sapareva Banya',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});
