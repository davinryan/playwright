/**
 * Filter nil, undefined, null items from a list
 */

/**
 * Clean formatting that handles special characters. Useful for attaching data to reports
 *
 * @param value JSON data to parse
 * @param space spacing size or delimiter
 */
const JSONSafeStringify = (value: any, space?: string | number) => {
  const seen = new Set();
  return JSON.stringify(
    value,
    (k, v) => {
      if (seen.has(v)) {
        return "...";
      }
      if (typeof v === "object") {
        seen.add(v);
      }
      return v;
    },
    space ?? 2
  );
};

/**
 * Synchronous delay for 'time' milliseconds
 * @param time milliseconds to pause for
 */
const delay = (time: number) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

export { JSONSafeStringify, delay };
