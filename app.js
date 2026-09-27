// app.js：渲染结果
import { gapOf } from "./gaps.js";
import { totalGaps } from "./total.js";

export function render(spec) {
  const left = spec.left || [];
  const right = spec.right || [];
  const view = totalGaps(left, right);
  const gaps = view.gaps || [];
  return { gaps: gaps, total: view.total || 0, biggest: view.biggest || 0,
           biggest_at: view.biggest_at || 0, count: gaps.length,
           left_count: left.length, right_count: right.length,
           tail: gapOf(left[0], right[0]) };
}
