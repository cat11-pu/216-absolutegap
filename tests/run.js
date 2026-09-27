import assert from "node:assert";
import { gapOf } from "../gaps.js";
import { totalGaps } from "../total.js";
import { render } from "../app.js";

let failed = 0;
function check(name, fn) {
  try { fn(); console.log("ok " + name); } catch (e) { failed += 1; console.log("FAIL " + name + " :: " + e.message); }
}

check("gapOf returns a number", () => {
  assert.strictEqual(typeof gapOf(3, 5), "number");
});

check("totalGaps returns gaps", () => {
  assert.ok(Array.isArray(totalGaps([1], [2]).gaps));
});

check("totalGaps returns a total", () => {
  assert.strictEqual(typeof totalGaps([1], [2]).total, "number");
});

check("render counts gaps", () => {
  assert.strictEqual(typeof render({ left: [1], right: [2] }).count, "number");
});

check("render exposes biggest position", () => {
  assert.strictEqual(typeof render({ left: [1], right: [2] }).biggest_at, "number");
});

console.log("5 cases, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
