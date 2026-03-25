const checkPayment = require('./payment');

describe("checkPayment()", () => { 

  test("amount greater than 100 is accepted", () => {
    const r = checkPayment(150);
    expect(r.success).toBe(true);
  });

  test("amount equal to 100 is accepted", () => {
    const r = checkPayment(100);
    expect(r.success).toBe(true);
  });

  test("amount less than 100 is rejected", () => {
    const r = checkPayment(70);
    expect(r.success).toBe(false);
  });

  test("amount equal to 0 is invalid", () => {
    const r = checkPayment(0);
    expect(r.success).toBe(false);
  });

  test("amount less than 0 is invalid", () => {
    const r = checkPayment(-20);
    expect(r.success).toBe(false);
  });

  test("string amount is invalid", () => {
    const r = checkPayment('120');
    expect(r.success).toBe(false);
  });

  test("undefined amount is invalid", () => {
    const r = checkPayment(undefined);
    expect(r.success).toBe(false);
  });

  test("null amount is invalid", () => {
    const r = checkPayment(null);
    expect(r.success).toBe(false);
  });

});

