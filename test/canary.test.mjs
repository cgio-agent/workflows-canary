import { test } from "node:test"
import assert from "node:assert/strict"

test("the canary runs", () => {
  assert.equal(1 + 1, 2)
})
