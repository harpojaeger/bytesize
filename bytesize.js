/**
 *
 * @param {int} bytes An integer number of bytes. May be zero or negative.
 * @param {int} maxDecimalDigits The maximum number of digits after the decimal
 * place in the returned, human-readable string. This is not equivalent to
 * significant figures; if the computed value has fewer digits after formatting,
 * it will not be zero-padded.
 * @return {string} A human-readable bytesize expression, such as '10GB' or
 * '-3.5MB'.
 */
function bytesize(bytes, maxDecimalDigits) {
  if (!Number.isInteger(bytes)) {
    throw new Error('Provided bytes must be an integer.');
  }
  if ( maxDecimalDigits < 0 || !Number.isInteger(maxDecimalDigits)) {
    throw new Error(
        'Provided maxDecimalDigits must be a non-negative integer');
  }
  const prefixes = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  let sign = '';
  if (bytes < 0) {
    sign = '-';
    bytes = -1 * bytes;
  }

  let quotient = bytes;
  let i = 0;
  while (quotient >= 1024 && i < prefixes.length - 1) {
    quotient = quotient / 1024;
    i++;
  }
  quotient =
      Math.round(quotient * (10 ** maxDecimalDigits)) /
        (10 ** maxDecimalDigits);
  // In the special case where quotient has been rounded up to 1024, we need to
  // reduce it "by hand.""
  if (quotient == 1024 && i < prefixes.length -1) {
    i++;
    quotient = 1;
  }

  return sign + quotient + prefixes[i] + 'B';
}

module.exports = bytesize;
