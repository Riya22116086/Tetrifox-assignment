// tests/classifier.test.js
import { classifyParcelObj } from "../src/routing/classifier.js";

test("small parcel -> Mail", () => {
  const p = { Weight: "0.5", Value: "0" };
  const r = classifyParcelObj(p, "1");
  expect(r.department).toBe("Mail");
  expect(r.requiresInsurance).toBe(false);
});

test("value > 1000 requires insurance", () => {
  const p = { Weight: "5", Value: "1500" };
  const r = classifyParcelObj(p, "2");
  expect(r.requiresInsurance).toBe(true);
  expect(r.routing[0]).toBe("Insurance");
  expect(r.routing[1]).toBe("Regular");
});
