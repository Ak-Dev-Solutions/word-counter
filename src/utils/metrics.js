// countWords: robust token counting using simple whitespace split + regex fallback
export function countWords(text = '') {
  if (!text) return 0;
  // Trim and match sequences of non-whitespace chars (treats hyphenated words as one)
  const matched = text.trim().match(/\S+/g);
  return matched ? matched.length : 0;
}

// countChars: optionally include or exclude spaces
export function countChars(text = '', { includeSpaces = true } = {}) {
  if (!text) return 0;
  if (includeSpaces) return text.length;
  // remove all whitespace (spaces/tabs/newlines) to count non-space characters
  return text.replace(/\s+/g, '').length;
}

// estimateReadingTime: returns number of minutes rounded up (assuming 200 wpm)
export function estimateReadingTime(words = 0, wordsPerMinute = 200) {
  if (!words) return 0;
  const mins = words / wordsPerMinute;
  return Math.max(1, Math.ceil(mins));
}
