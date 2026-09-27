// total.js：合计（逐项绝对差相加，单次扫描）
import { gapOf } from "./gaps.js";

export function totalGaps(left, right) {
  if (left.length !== right.length) {
    const error = new Error("column length mismatch");
    error.code = "E_BAD_COLUMN";
    throw error;
  }
  const gaps = new Array(left.length);
  let total = 0;
  let biggest = 0;
  let biggest_at = 0;
  for (let index = 0; index < left.length; index += 1) {
    const gap = gapOf(left[index], right[index]);
    gaps[index] = gap;
    total += gap;
    if (gap > biggest) {
      biggest = gap;
      biggest_at = index + 1;
    }
  }
  return { gaps: gaps, total: total, biggest: biggest, biggest_at: biggest_at };
}
