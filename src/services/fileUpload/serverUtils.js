/**
 * Sanitizes a filename to prevent malicious script calls.
 * Removes any characters except alphanumerics, dash, underscore, and dot.
 * Also strips leading/trailing dots and spaces, and collapses multiple dots.
 * @param {string} filename
 * @returns {string} sanitized filename
 */
function sanitizeFileName(filename) {
  if (typeof filename !== 'string') return '';
  let sanitized = filename.replace(/[/\\]+/g, '')
    .replace(/\.+/g, '.')
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/^\.+/, '')
    .replace(/\s+/g, '_')
    .replace(/\.+$/, '');
  if (!sanitized) sanitized = 'file';
  return sanitized;
}

module.exports = {
  sanitizeFileName,
};
