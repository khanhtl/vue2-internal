import { autorun, Dep } from "../reactive/dependency-tracking";
import { afterAll, describe, it, expect, vi, afterAll } from "vitest";

describe("Dependency tracking", () => {
  const consoleMock = vi
    .spyOn(console, "log")
    .mockImplementation(() => undefined);

  afterAll(() => {
    consoleMock.mockReset();
  });
  const dep = new Dep();
  it("should log updated", () => {
    autorun(() => {
      dep.depen();
      console.log("updated");
    });
    expect(consoleMock).toHaveBeenLastCalledWith(`updated`);
  });
  it("should log updated again", () => {
    dep.notify();
    expect(consoleMock).toHaveBeenLastCalledWith(`updated`);
  });
});
