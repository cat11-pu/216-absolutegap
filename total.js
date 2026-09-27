// total.js：合计，一次扫描逐项算绝对差并相加
import { gapOf } from "./gaps.js";

export function totalGaps(left, right) {
  if (left.length !== right.length) {
    const error = new Error("两列长度不一致：左列 " + left.length + " 项，右列 " + right.length + " 项");
    error.code = "E_BAD_COLUMN";
    throw error;
  }
  const gaps = new Array(left.length);
  let total = 0;
  let biggest = 0;
  let biggest_at = 0;
  for (let spot = 0; spot < left.length; spot += 1) {
    const gap = gapOf(left[spot], right[spot]);
    gaps[spot] = gap;
    total += gap;
    if (gap > biggest) {
      biggest = gap;
      biggest_at = spot + 1;
    }
  }
  return { gaps: gaps, total: total, biggest: biggest, biggest_at: biggest_at };
}
