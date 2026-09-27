// total.js：合计（基线：一律给空表）
import { gapOf } from "./gaps.js";

export function totalGaps(left, right) {
  return { gaps: [], total: 0, biggest: 0, biggest_at: 0 };
}
