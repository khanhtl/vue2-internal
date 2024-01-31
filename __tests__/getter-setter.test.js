import { convert } from "../reactive/getter-setter";
import { afterAll, describe, it, expect, vi } from "vitest";

const obj = {
  foo: "bar",
};
convert(obj);

describe("Getter Setter", () => {
  const consoleMock = vi
    .spyOn(console, "log")
    .mockImplementation(() => undefined);

  afterAll(() => {
    consoleMock.mockReset();
  });

  it('should log getting key "foo": bar', () => {
    expect(obj.foo).toBe("bar");
    expect(consoleMock).toHaveBeenLastCalledWith(`getting key "foo": bar`);
  });
    it('should log setting key "foo" to: barr', () => {
    obj.foo = 'barr'
    expect(consoleMock).toHaveBeenLastCalledWith(`setting key "foo" to: barr`);
  });
  it('should log getting key "foo": barr', () => {
    expect(obj.foo).toBe("barr");
    expect(consoleMock).toHaveBeenLastCalledWith(`getting key "foo": barr`);
  });
});
