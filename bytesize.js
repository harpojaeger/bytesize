/**
 *
 * @param {int} bytes An integer number of bytes. May be zero or negative.
 * @param {int} maxDecimalDigits The maximum number of digits after the decimal
 * place in the returned, human-readable string. This is not equivalent to
 * significant figures; if the computed value has fewer digits after formatting,
 * it will not be zero-padded.
 * @return {string} A human-readable bytesize expression, such as '10G' or
 * '-3.5M'.
 */
function bytesize(bytes, maxDecimalDigits) {
  return '';
}

module.exports = bytesize;
