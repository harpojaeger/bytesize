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
  const prefixes = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  let sign = '';
  metricPrefix = '';
  if (bytes < 0) {
    sign = '-';
    bytes = -1 * bytes;
  }
  let formatted;
  if (bytes < 1024) {
    formatted = bytes;
  } else {
    let quotient = bytes;
    let i = 0;
    while (quotient >= 1024 && i < prefixes.length - 1) {
      quotient = quotient / 1024;
      i++;
    }
    quotient =
      Math.round(quotient * (10 ** maxDecimalDigits)) /
        (10 ** maxDecimalDigits);
    if (quotient == 1024) {
      i++;
      quotient = 1;
    }
    metricPrefix = prefixes[i];
    formatted = quotient;
  }
  return sign + formatted + metricPrefix + 'B';
}

module.exports = bytesize;
